import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { UsuariosCadastrados } from "./usuario.service.js"; // Ajustado para PascalCase
import { CriaUsuarioDTO } from './dto/criaUsuario.dto.js';
//import { AlteraUsuarioDTO } from "./dto/alteraUsuario.dto.js";
import { LoginUsuarioDTO } from "./dto/login.dto.js";

@Controller('/usuarios')
export class UsuarioController {
  constructor(private readonly usuariosService: UsuariosCadastrados) {}

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async loginUsuario(@Body() loginDto: LoginUsuarioDTO) {
    const usuario = await this.usuariosService.validaLogin(loginDto.email, loginDto.senha);

    if (usuario) {
      return {
        message: "Login efetuado com sucesso",
        usuario: {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
          cidade: usuario.cidade,
        },
      };
    }

    return {
      message: "E-mail ou senha inválidos",
      usuario: null,
    };
  }

  @Post()
  async cadastroUsuario(@Body() dadosUsuario: CriaUsuarioDTO) {
    const retorno = await this.usuariosService.adicionaUsuario(dadosUsuario);

    if (retorno) {
      return {
        message: "Cadastro efetuado com sucesso",
        id: retorno,
      };
    }

    return {
      message: "Cadastro não efetuado",
      id: null,
    };
  }

  @Get()
  async retornarUsuarios() {
    const listaUsuarios = await this.usuariosService.retornaUsuarios();
    
    return {
      message: "Consulta efetuada",
      usuarios: listaUsuarios,
    };
  }

  @Get('/:id')
  async retornarUsuarioID(@Param('id') id: string) {
    const usuario = await this.usuariosService.retornaUsuarioID(id);

    if (usuario) {
      return {
        message: "Usuário localizado",
        usuario: usuario,
      };
    }

    return {
      message: "Usuário não localizado",
      usuario: null,
    };
  }

 /* @Put('/:id')
  async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AlteraUsuarioDTO) {
    const retorno = await this.usuariosService.atualizaUsuario(id, novosDados);

    if (retorno) {
      return {
        message: "Usuário atualizado com sucesso",
        id: retorno,
      };
    }

    return {
      message: "Usuário não localizado para atualização",
      id: null,
    };
  */
  }

