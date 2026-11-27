import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TimelineService } from './timeline.service.js';
import { CriaPostagemDTO } from './dto/criaPostagem.dto.js';

@ApiTags('timeline')
@Controller('timeline')
export class TimelineController {
  constructor(private readonly timelineService: TimelineService) {}

  @Get()
  @ApiOperation({ summary: 'Lista todas as postagens do feed' })
  @ApiResponse({ status: 200, description: 'Retorna a lista de postagens com sucesso.' })
  obterPostagens() {
    return this.timelineService.listar();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Cria uma nova postagem na timeline' })
  @ApiResponse({ status: 201, description: 'Postagem criada com sucesso.' })
  @ApiResponse({ status: 400, description: 'Dados inválidos.' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado.' })
  criarPostagem(@Body() dados: CriaPostagemDTO) {
    return this.timelineService.criar(dados);
  }
}