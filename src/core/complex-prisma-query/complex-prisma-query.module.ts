import { Module } from '@nestjs/common';
import { ComplexPrismaQueryService } from './complex-prisma-query.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  providers: [ComplexPrismaQueryService],
  exports: [ComplexPrismaQueryService],
  imports: [PrismaModule],
})
export class ComplexPrismaQueryModule {}
