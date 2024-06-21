import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { CommonDomainModule } from './common-domain/common-domain.module';

@Module({
  providers: [CommonService],
  exports: [CommonService],
  imports: [CommonDomainModule],
})
export class CommonModule {}
