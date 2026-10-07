import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { UsuarioModule } from './usuario/usuario.module.js';
import { usuariosCadastrados } from './usuario/usuario.service.js';
import { UsuarioController } from './usuario/usuario.controller.js';
import { FilmesModule } from './usuario/filme.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}
