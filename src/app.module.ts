import { Module } from '@nestjs/common';
import { UsuariosController } from './modules/usuarios/usuarios.controller.js';

@Module({
  imports: [],
  controllers: [UsuariosController],
  providers: [],
})
export class AppModule {}