import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Treino } from './treino.entity.js';
import { TreinoService } from './treino.service.js';
import { TreinoController } from './treino.controller.js';

@Module({
  imports: [TypeOrmModule.forFeature([Treino])],
  controllers: [TreinoController],
  providers: [TreinoService],
  exports: [TreinoService],
})
export class TreinoModule {}
