// Importa o decorator '@ApiProperty' da biblioteca do Swagger para documentar campos da API
import { ApiProperty } from "@nestjs/swagger";
// Importa os decorators de validação '@IsEmail' e '@IsString' da biblioteca 'class-validator'
import { IsEmail, IsString } from "class-validator";

// Exporta a classe 'LoginUsuarioDTO' (Data Transfer Object) usada para tipar e validar os dados de login enviados na requisição
export class Logindto {
    // Decorator que valida se o valor recebido no campo é um e-mail válido; se falhar, retorna a mensagem customizada "Email inválido"
    @IsEmail({}, { message: "Email inválido" })

        // Decorator do Swagger que adiciona documentação ao campo 'email' na interface Swagger/OpenAPI
    @ApiProperty({
                // Define um exemplo fictício de e-mail que aparecerá na documentação do Swagger
                example: 'felipe.silva.bianchi@gmail.com',
                // Define a descrição do campo que será exibida no Swagger explicando seu formato e finalidade
                description: 'Tipo:String/email; Email do usuário, usado para login, identificação e comunicados'
            })
    
    // Declara a propriedade 'email' do tipo string TypeScript
    email: string;

    // Decorator que valida se o valor recebido no campo é do tipo texto (string)
    @IsString()

    // Decorator do Swagger que adiciona documentação ao campo 'senha' na interface Swagger/OpenAPI
    @ApiProperty({
                // Define um exemplo de senha para ilustrar o formato na documentação do Swagger
                example: '#alocar depois',
                // Define a descrição informando o tipo e os requisitos de segurança da senha
                description: 'Tipo:String; Senha usada para login, deve seguir padrão de segurança minimo, evitando padrões.'
            })
    // Declara a propriedade 'senha' do tipo string TypeScript
    senha: string;
}
