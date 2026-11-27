import { Module } from '@nestjs/common';
import { UsuarioModule } from '../usuarios/usuario.module.js';
import { TimelineController } from './timeline.controller.js';
import { TimelineService } from './timeline.service.js';

@Module({
  imports: [UsuarioModule], // para usar o UsuariosCadastrados
  controllers: [TimelineController],
  providers: [TimelineService],
})
export class TimelineModule {}