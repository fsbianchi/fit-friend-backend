import { Injectable, NotFoundException } from '@nestjs/common';
import { UsuariosCadastrados } from '../usuarios/usuario.service.js';
import { Postagem } from './entities/postagem.entity.js';
import { CriaPostagemDTO } from './dto/criaPostagem.dto.js';

@Injectable()
export class TimelineService {
  // Mesmo padrão do UsuariosCadastrados: lista em memória.
  // Começa com os posts de exemplo que já existiam no controller.
  #postagens: Postagem[] = [
    new Postagem(1, 'mock', 'Mirian', 'https://i.pravatar.cc/150?img=1',
      'Primeiro treino da semana concluído com sucesso! 💪 Alguém mais focado hoje?', 12, 3),
    new Postagem(2, 'mock', 'Felipe', 'https://i.pravatar.cc/150?img=11',
      'Alguém para uma corrida no parque amanhã ao final da tarde?', 5, 1),
    new Postagem(3, 'mock', 'Matheus', 'https://i.pravatar.cc/150?img=12',
      'Alguém para uma partida de basquete?', 67, 10),
  ];
  #proximoId = 4;

  constructor(private readonly usuariosService: UsuariosCadastrados) {}

  listar(): Postagem[] {
    // mais recentes primeiro
    return [...this.#postagens].sort((a, b) => b.data.localeCompare(a.data));
  }

  async criar(dto: CriaPostagemDTO): Promise<Postagem> {
    let usuario;
    try {
      usuario = await this.usuariosService.retornaUsuarioID(dto.usuarioId);
    } catch {
      // o service de usuários pode lançar Error comum; aqui viramos 404 de verdade
      throw new NotFoundException('Usuário não encontrado');
    }

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const postagem = new Postagem(
      this.#proximoId++,
      usuario.id,
      usuario.nome,
      `https://i.pravatar.cc/150?u=${usuario.id}`,
      dto.conteudo.trim(),
    );

    this.#postagens.push(postagem);
    return postagem;
  }
}