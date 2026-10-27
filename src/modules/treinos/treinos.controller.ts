import { Controller, Get, Post, Body, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import {ApiTags,ApiOperation,ApiResponse,ApiParam,ApiNotFoundResponse,ApiCreatedResponse,} from '@nestjs/swagger';
import { TreinoService } from './treino.service.js';
import { CreateTreinoDto } from './dto/create-treino.dto.js';
import { Treino } from './treino.entity.js';

@ApiTags('Treinos')
@Controller('treinos')
export class TreinoController {
  constructor(private readonly treinoService: TreinoService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastrar um novo treino' })
  @ApiCreatedResponse({
    description: 'Treino criado com sucesso.',
    type: Treino,
  })
  @ApiNotFoundResponse({ description: 'Usuário informado não foi encontrado.' })
  async criar(@Body() createTreinoDto: CreateTreinoDto): Promise<Treino> {
    return await this.treinoService.criar(createTreinoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os treinos cadastrados' })
  @ApiResponse({
    status: 200,
    description: 'Lista de treinos retornada com sucesso.',
    type: [Treino],
  })
  async listarTodos(): Promise<Treino[]> {
    return await this.treinoService.listarTodos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um treino pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do treino (UUID)', type: String })
  @ApiResponse({
    status: 200,
    description: 'Treino encontrado com sucesso.',
    type: Treino,
  })
  @ApiNotFoundResponse({ description: 'Treino não encontrado.' })
  async buscarPorId(@Param('id', ParseUUIDPipe) id: string): Promise<Treino> {
    return await this.treinoService.buscarPorId(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um treino pelo ID' })
  @ApiParam({ name: 'id', description: 'ID do treino (UUID)', type: String })
  @ApiResponse({ status: 200, description: 'Treino removido com sucesso.' })
  @ApiNotFoundResponse({ description: 'Treino não encontrado.' })
  async remover(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
    return await this.treinoService.remover(id);
  }
}
