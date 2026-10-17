import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('timeline')
@Controller('timeline')
export class TimelineController {
  
  @Get()
  @ApiOperation({ summary: 'Lista todas as postagens do feed (Mock para o React)' })
  @ApiResponse({ status: 200, description: 'Retorna a lista de postagens com sucesso.' })
  obterPostagens() {
    return [
      {
        id: 1,
        autor: 'Mirian',
        avatar: 'https://i.pravatar.cc/150?img=1',
        conteudo: 'Primeiro treino da semana concluído com sucesso! 💪 Alguém mais focado hoje?',
        curtidas: 12,
        comentarios: 3,
        data: new Date().toISOString(),
      },
      {
        id: 2,
        autor: 'Felipe',
        avatar: 'https://i.pravatar.cc/150?img=11',
        conteudo: 'Alguém para uma corrida no parque amanhã ao final da tarde?',
        curtidas: 5,
        comentarios: 1,
        data: new Date().toISOString(),
      }, // <-- Vírgula adicionada aqui!
      {
        id: 3, // <-- Ajustado para ID único 3
        autor: 'Matheus',
        avatar: 'https://i.pravatar.cc/150?img=11',
        conteudo: 'Alguém para uma partida de basquete?',
        curtidas: 67,
        comentarios: 10,
        data: new Date().toISOString(),
      }
    ];
  }
}