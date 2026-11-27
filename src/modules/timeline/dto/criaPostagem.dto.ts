import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CriaPostagemDTO {
  @IsString()
  @IsNotEmpty({ message: 'O ID do usuário é obrigatório' })
  @ApiProperty({
    example: '0b6f1c1e-1f0e-4a3b-9a55-2f8d3c1d9e11',
    description: 'ID do usuário que está criando a postagem.',
  })
  usuarioId: string;

  @IsString()
  @IsNotEmpty({ message: 'O conteúdo da postagem não pode ser vazio' })
  @MaxLength(500, { message: 'A postagem deve ter no máximo 500 caracteres' })
  @ApiProperty({
    example: 'Treino de pernas concluído! 🦵',
    description: 'Texto da postagem.',
  })
  conteudo: string;
}