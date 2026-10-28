import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Treino } from './treino.entity.js';
import { CreateTreinoDto } from './dto/create-treino.dto.js';
import { Usuario } from '../usuarios/usuario.entity.js';

@Injectable()
export class TreinoService {
  constructor(
    @InjectRepository(Treino)
    private readonly treinoRepository: Repository<Treino>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async criar(createTreinoDto: CreateTreinoDto): Promise<Treino> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id: createTreinoDto.usuarioId },
    });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const novoTreino = this.treinoRepository.create({
      titulo: createTreinoDto.titulo,
      descricao: createTreinoDto.descricao,
      usuario,
    });

    return await this.treinoRepository.save(novoTreino);
  }

  async listarTodos(): Promise<Treino[]> {
    return await this.treinoRepository.find({
      relations: { usuario: true },
    });
  }

  async buscarPorId(id: string): Promise<Treino> {
    const treino = await this.treinoRepository.findOne({
      where: { id },
      relations: { usuario: true },
    });

    if (!treino) {
      throw new NotFoundException(`Treino com ID ${id} não encontrado`);
    }

    return treino;
  }

  async remover(id: string): Promise<void> {
    const resultado = await this.treinoRepository.delete(id);
    if (resultado.affected === 0) {
      throw new NotFoundException(`Treino com ID ${id} não encontrado`);
    }
  }
}
