import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Usuario } from './usuario.entity.js';
import { CriaUsuarioDTO } from './dto/criaUsuario.dto.js';

@Injectable()
export class UsuariosCadastrados {
  private usuarios: Usuario[] = [];

  // 1. Validação de Login usando a instância da Entity
  async validaLogin(email: string, senhaTentativa: string): Promise<Usuario | null> {
    const usuario = this.usuarios.find((u) => u.email === email);

    if (!usuario) {
      return null;
    }

    const senhaValida = await usuario.login(senhaTentativa);

    if (senhaValida) {
      return usuario;
    }

    return null;
  }

  // 2. Cadastro de Novo Usuário
  async adicionaUsuario(dadosUsuario: CriaUsuarioDTO): Promise<string | null> {
    const id = randomUUID();

        const novoUsuario = new Usuario(
  id,
  dadosUsuario.nome,
  dadosUsuario.idade,
  dadosUsuario.cidade,
  dadosUsuario.email,
  dadosUsuario.telefone,
  dadosUsuario.senha,
  dadosUsuario.endereco || '' // Garante que nunca passa undefined
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

  // 5. Apaga usuário
  async apagaUsuario(id: string): Promise<Usuario | null> {
    const possivelUsuario = await this.retornaUsuarioID(id);

    if (!possivelUsuario) {
      return null;
    }

    this.usuarios = this.usuarios.filter(
      (usuarioSalvo) => usuarioSalvo.id !== id
    );

    return possivelUsuario;
  }
}