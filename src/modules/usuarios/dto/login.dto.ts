import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginUsuarioDTO {
  @IsEmail({}, { message: 'E-mail inválido' })
  @IsNotEmpty({ message: 'O e-mail não pode ser vazio' })
  @ApiProperty({ example: 'erica.ribeiro@email.com', description: 'E-mail de login' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'A senha não pode ser vazia' })
  @ApiProperty({ example: '123456', description: 'Senha de acesso' })
  senha: string;
}