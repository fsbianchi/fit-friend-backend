import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength, IsOptional } from "class-validator";

export class CriaUsuarioDTO {
  @IsString()
  @IsNotEmpty({ message: "O nome não pode ser vazio" })
  @ApiProperty({ example: 'Erica Ribeiro', description: 'Nome completo do usuário.' })
  nome: string;

  @IsNumber()
  @ApiProperty({ example: 25, description: 'Idade do usuário.' })
  idade: number;

  @IsString()
  @IsNotEmpty({ message: "A cidade não pode ser vazia" })
  @ApiProperty({ example: 'Bauru', description: 'Cidade de residência.' })
  cidade: string;

  @IsEmail({}, { message: "E-mail inválido" })
  @IsNotEmpty({ message: "O e-mail não pode ser vazio" })
  @ApiProperty({ example: 'erica.ribeiro@email.com', description: 'E-mail para login.' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: "O telefone não pode ser vazio" })
  @ApiProperty({ example: '(14) 99999-9999', description: 'Número de telefone.' })
  telefone: string;

  @IsString()
  @MinLength(6, { message: "A senha deve ter pelo menos 6 caracteres" })
  @ApiProperty({ example: '123456', description: 'Senha de acesso.' })
  senha: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ example: 'Rua Exemplo, 123', description: 'Endereço opcional.' })
  endereco?: string;
}
