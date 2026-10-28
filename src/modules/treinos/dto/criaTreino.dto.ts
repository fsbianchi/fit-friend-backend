import { IsNotEmpty, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateTreinoDto {
  @IsString()
  @IsNotEmpty({ message: 'O título do esporte/treino é obrigatório' })
  titulo: string;

  @IsString()
  @IsNotEmpty({ message: 'A descrição sobre o esporte é obrigatória' })
  @MinLength(10, { message: 'A descrição deve ter no mínimo 10 caracteres' })
  descricao: string;

  @IsUUID('4', { message: 'O ID do usuário deve ser um UUID válido' })
  @IsNotEmpty({ message: 'O ID do usuário é obrigatório' })
  usuarioId: string;
}
