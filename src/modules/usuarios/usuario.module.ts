import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller.js';
import { UsuariosCadastrados } from './usuario.service.js';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [UsuariosCadastrados],
})
export class UsuarioModule {}