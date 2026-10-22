import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuarios/usuario.module.js';
import { TimelineController } from './modules/timeline/timeline.controller.js';

@Module({
  imports: [UsuarioModule],
  controllers: [TimelineController],
  providers: [],
})
export class AppModule {}
