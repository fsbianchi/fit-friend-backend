import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CriarUsuarioDto {
  @IsString()
  @IsNotEmpty({ message: "nome Não pode ser vazio" })
  @ApiProperty({
    example: 'Erica Ribeiro',
    description: 'O nome é usado para identificar o usuário, em telas, cadastros e outros.',
  })
  nome: string;

  @IsString()
  @IsNotEmpty({ message: "email Não pode ser vazio" })
  @ApiProperty({
    example: 'erica.ribeiro@email.com',
    description: 'Email de login e contato do usuário.',
  })
  email: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Bauru, SP',
    description: 'Localização do usuário para encontrar parceiros próximos.',
  })
  localizacao?: string;
}
