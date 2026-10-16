// Importa os decorators de validação do 'class-validator' para checar tipos, opcionalidade e tamanho mínimo
import { IsEmail, IsNumber, IsOptional, IsString, MinLength } from "class-validator";
// Importa o validador customizado que verifica se o e-mail já está cadastrado no sistema
import { EmailUnico } from "../validator/emailUnico.validator.js";
// Importa o validador customizado que verifica se a senha atende aos requisitos de segurança
import { SenhaForte } from "../validator/senhaForte.validator.js";
// Importa o decorator do Swagger para documentar propriedades opcionais na API
import { ApiPropertyOptional } from "@nestjs/swagger";

// Exporta a classe DTO usada para validar e tipar os dados ao atualizar/alterar um usuário
export class alterUsuariodto {
    // Valida se o campo 'nome' é do tipo texto (string)
    @IsString()
    // Indica que o campo 'nome' é opcional no corpo da requisição
    @IsOptional()
    // Documenta a propriedade no Swagger como opcional, definindo exemplo e descrição
    @ApiPropertyOptional({
        example: 'Felipe Silva', // Exemplo fictício do nome para a documentação
        description: 'Tipo:String; Nome usado para identificar o usuário em telas, cadastros e etc' // Descrição no Swagger
    })
    // Declara a propriedade 'nome' do tipo string TypeScript
    nome: string;
    
    // Valida se o campo 'idade' é do tipo numérico (number)
    @IsNumber()
    // Indica que o campo 'idade' é opcional no corpo da requisição
    @IsOptional()
    // Documenta a propriedade no Swagger com exemplo e descrição
    @ApiPropertyOptional({
            example: 18, // Exemplo de idade para a documentação
            description: 'Tipo:Number; Idade do usuario, apenas visual' // Descrição no Swagger
        })
    // Declara a propriedade 'idade' do tipo number TypeScript
    idade: number;
    
    // Valida se o campo 'cidade' é do tipo texto (string)
    @IsString()
    // Indica que o campo 'cidade' é opcional no corpo da requisição
    @IsOptional()
    // Documenta a propriedade no Swagger com exemplo e descrição
    @ApiPropertyOptional({
            example: 'Bauru', // Exemplo do nome da cidade
            description: 'Tipo:String; Cidade do usuário.' // Descrição no Swagger
        })
    // Declara a propriedade 'cidade' do tipo string TypeScript
    cidade: string;
    
    // Valida se o texto possui o formato de um e-mail válido
    @IsEmail()
    // Aplica a validação customizada para garantir que o e-mail não pertença a outro usuário, retornando mensagem de erro personalizada se falhar
    @EmailUnico({message:"Ja existe um usuario com esse email."})
    // Valida se o campo 'email' é do tipo texto (string)
    @IsString()
    // Indica que o campo 'email' é opcional no corpo da requisição
    @IsOptional()
    // Documenta a propriedade no Swagger com exemplo e descrição
    @ApiPropertyOptional({
            example: 'felipe.silva.bianchi@gmail.com', // Exemplo de e-mail para a documentação
            description: 'Tipo:String/email; Email do usuário, usado para login, identificação e comunicados' // Descrição no Swagger
        })
    // Declara a propriedade 'email' do tipo string TypeScript
    email: string;
    
    // Valida se o campo 'telefone' é do tipo texto (string)
    @IsString()
    // Indica que o campo 'telefone' é opcional no corpo da requisição
    @IsOptional()
    // Documenta a propriedade no Swagger com exemplo e descrição
    @ApiPropertyOptional({
            example: '9999999-9999', // Exemplo de telefone formatado
            description: 'Tipo:String; telefone do usuário' // Descrição no Swagger
        })
    // Declara a propriedade 'telefone' do tipo string TypeScript
    telefone: string;
    
    // Valida se o campo 'senha' é do tipo texto (string)
    @IsString()
    // Aplica a validação customizada para força da senha, retornando mensagem de erro personalizada se não atingir os requisitos
    @SenhaForte({message:"Senha fraca"})
    // Indica que o campo 'senha' é opcional no corpo da requisição
    @IsOptional()
    // Documenta a propriedade no Swagger com exemplo e descrição
    @ApiPropertyOptional({
            example: 'SenhaForte@1234567', // Exemplo de senha válida para a documentação
            description: 'Tipo:String; Senha usada para login, deve seguir padrão de segurança minimo, evitando padrões.' // Descrição no Swagger
        })
    // Declara a propriedade 'senha' do tipo string TypeScript
    senha: string; 
    
    // Valida se o campo 'endereco' é do tipo texto (string)
    @IsString()
    // Indica que o campo 'endereco' é opcional no corpo da requisição
    @IsOptional()
    // Documenta a propriedade no Swagger com exemplo e descrição
    @ApiPropertyOptional({
            example: 'Rua Engenheiro Saint Martin, Bairro Centro, numero 1021', // Exemplo de endereço completo
            description: 'Tipo:String; Endereço do usuário' // Descrição no Swagger
        })
    // Declara a propriedade 'endereco' do tipo string TypeScript
    endereco: string;
}
