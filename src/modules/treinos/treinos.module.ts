import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreinoController } from './treino.controller.js';
import { TreinoService } from './treino.service.js';
import { Treino } from './treino.entity.js';
import { Usuario } from '../usuarios/usuario.entity.js';

@Module({
  imports: [
    // Registra os repositórios de Treino e Usuario para injeção de dependência via @InjectRepository
    TypeOrmModule.forFeature([Treino, Usuario]),
  ],
  controllers: [TreinoController],
  providers: [TreinoService],
  exports: [TreinoService], // Exporta o serviço caso outro módulo (ex: TimelineModule) precise dele
})
export class TreinoModule {}
