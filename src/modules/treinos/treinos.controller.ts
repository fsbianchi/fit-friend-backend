import { Controller, Get, Post, Body, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TreinoService } from './treino.service.js';
import { CreateTreinoDto } from './dto/create-treino.dto.js';
import { Treino } from './treino.entity.js';

@ApiTags('treinos') // Associa o controller à tag 'treinos' configurada no main.ts
@Controller('treinos')
export class TreinoController {
  constructor(private readonly treinoService: TreinoService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Cadastrar um novo treino/esporte' })
  @ApiResponse({ status: 201, description: 'Treino criado com sucesso.', type: Treino })
  async criar(@Body() createTreinoDto: CreateTreinoDto): Promise<Treino> {
    return await this.treinoService.criar(createTreinoDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Listar todos os treinos' })
  @ApiResponse({ status: 200, description: 'Lista de treinos retornada com sucesso.', type: [Treino] })
  async listarTodos(): Promise<Treino[]> {
    return await this.treinoService.listarTodos();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Buscar treino por ID' })
  @ApiResponse({ status: 200, description: 'Treino encontrado com sucesso.', type: Treino })
  @ApiResponse({ status: 404, description: 'Treino não encontrado.' })
  async buscarPorId(@Param('id') id: string): Promise<Treino> {
    return await this.treinoService.buscarPorId(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remover um treino por ID' })
  @ApiResponse({ status: 204, description: 'Treino removido com sucesso.' })
  @ApiResponse({ status: 404, description: 'Treino não encontrado.' })
  async remover(@Param('id') id: string): Promise<void> {
    return await this.treinoService.remover(id);
  }
}
