import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Usuario } from './entities/usuario.entity.js';
import { CriaUsuarioDTO } from './dto/criaUsuario.dto.js';
import { AlteraUsuarioDTO } from './dto/alteraUsuario.dto.js';

@Injectable()
export class UsuariosCadastrados {
  private usuarios: Usuario[] = [];

  // 1. Validação de Login usando a instância da Entity
  async validaLogin(email: string, senhaTentativa: string): Promise<Usuario | null> {
    const usuario = this.usuarios.find((u) => u.email === email);

    if (!usuario) {
      return null;
    }

    // Utiliza o método de validação assíncrono da entidade Usuario
    const senhaValida = await usuario.validarSenha(senhaTentativa);

    if (senhaValida) {
      return usuario;
    }

    return null;
  }

  // 2. Cadastro de Novo Usuário
  async adicionaUsuario(dadosUsuario: CriaUsuarioDTO): Promise<string | null> {
    const id = dadosUsuario.id || randomUUID();

    // Cria a instância da Entity, o que já executa o hash da senha no construtor
    const novoUsuario = new Usuario(
      id,
      dadosUsuario.nome,
      dadosUsuario.idade,
      dadosUsuario.cidade,
      dadosUsuario.email,
      dadosUsuario.telefone,
      dadosUsuario.senha,
      dadosUsuario.endereco
    );

    this.usuarios.push(novoUsuario);

    return novoUsuario.id;
  }

  // 3. Retornar todos os usuários
  async retornaUsuarios(): Promise<Usuario[]> {
    return this.usuarios;
  }

  // 4. Retornar usuário por ID
  async retornaUsuarioID(id: string): Promise<Usuario | null> {
    const usuario = this.usuarios.find((u) => u.id === id);
    return usuario || null;
  }
// 5. Apaga usuario
  async apagaUsuario(id:string){
        let possivelUsuario = this.retornaUsuarioID(id);

        this.#usuarios = this.#usuarios.filter(
            usuarioSalvo => usuarioSalvo.id !== id
        )

        return possivelUsuario;
    }

  // 
  // Por enquando somente 
  // 1. Validação de Login usando a instância da Entity
  // 2. Cadastro de Novo Usuário
  // 3. Retornar todos os usuários
  // 4. Retornar usuário por ID
  // 5. Apaga usuario
    return usuario.id;
  }
}
