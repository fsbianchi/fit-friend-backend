import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { CriarUsuarioDto } from './usuario.dto.js';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
  
  @ApiCreatedResponse({ description: 'Retorna que houve sucesso ao cadastrar o usuário e retorna os dados.' })
  @ApiResponse({ status: 500, description: 'Erro interno no servidor.' })
  @Post()
  criarUsuario(@Body() dados: CriarUsuarioDto) {
    return { 
      mensagem: 'Usuário recebido com sucesso!', 
      dadosRecebidos: dados 
    };
  }
}