import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuarios/usuario.module.js';
import { TimelineModule } from './modules/timeline/timeline.module.js';

@Module({
  imports: [UsuarioModule, TimelineModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
