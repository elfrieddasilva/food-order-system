import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
    BadRequestException,
    Logger,
  } from '@nestjs/common';
  import { Response } from 'express';
  import { ErrorDTO } from './ErrorDTO';
  
  @Catch()
  export class GlobalExceptionHandler implements ExceptionFilter {
    readonly logger = new Logger();
    catch(exception: unknown, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
      let status = HttpStatus.INTERNAL_SERVER_ERROR;
      let errorResponse: ErrorDTO;
  
      if (exception instanceof HttpException) {
        status = exception.getStatus();
        errorResponse = ErrorDTO.builder().code(exception.getResponse() as string).message((exception.getResponse() as any).message || exception.message).build();
      } else if (exception instanceof BadRequestException) {
        status = HttpStatus.BAD_REQUEST;
        const response = exception.getResponse() as any;
        let message = exception.message;
        
        if (response.message && Array.isArray(response.message)) {
          message = response.message.join('--');
        }
  
        errorResponse = ErrorDTO.builder().code(HttpStatus.BAD_REQUEST.toString()).message(message).build();
      } else {
        errorResponse = ErrorDTO.builder()
        .code(HttpStatus.INTERNAL_SERVER_ERROR.toString())
        .message('Unexpected error!')
        .build();
      }
  
      this.logger.error(exception);
  
      response.status(status).json({
        ...errorResponse,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }
  