import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import {
  OrderDomainException,
  OrderNotFoundException,
} from '@app/order-domain';
import { ErrorDTO, GlobalExceptionHandler } from '@app/common';

@Catch()
export class OrderGlobalExceptionHandler extends GlobalExceptionHandler {
  catch(exception: unknown | any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let errorResponse: ErrorDTO;

    if (exception instanceof OrderDomainException) {
      status = HttpStatus.BAD_REQUEST;
      errorResponse = ErrorDTO.builder()
        .code(HttpStatus.BAD_REQUEST.toString())
        .message(exception.message)
        .build();
    } else if (exception instanceof OrderNotFoundException) {
      status = HttpStatus.NOT_FOUND;
      errorResponse = ErrorDTO.builder()
        .code(HttpStatus.NOT_FOUND.toString())
        .message(exception.message)
        .build();
    } else {
      errorResponse = ErrorDTO.builder()
        .code(HttpStatus.INTERNAL_SERVER_ERROR.toString())
        .message(exception.message)
        .build();
    }

    console.error(exception);

    response.status(status).json({
      ...errorResponse,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
