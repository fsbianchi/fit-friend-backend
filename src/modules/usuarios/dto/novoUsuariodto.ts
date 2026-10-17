// Importa os decorators de validação do 'class-validator' para checar tipos e formatos de dados
import { IsEmail, IsNumber, IsString, MinLength } from "class-validator";

// Importa o validador customizado que verifica se o e-mail já foi cadastrado no sistema
import { EmailUnico } from "../validator/emailUnico.validator.js";

// Importa o validador customizado que garante que a senha atenda aos critérios de segurança
import { SenhaForte } from "../validator/senhaForte.validator.js";

// Importa o decorator do Swagger para documentar campos obrigatórios na API/OpenAPI
import { ApiProperty } from "@nestjs/swagger";

// Exporta a classe DTO usada para validar e tipar os dados recebidos na criação de um novo usuário
export class novoUsuariodto {

    // Valida se o valor enviado no campo 'nome' é do tipo texto (string)
    @IsString()

    // Documenta a propriedade no Swagger definindo um exemplo e uma descrição
    @ApiProperty({
        example: 'Erika Silva', // Exemplo fictício de nome para a documentação
        description: 'Tipo:String; Nome usado para identificar o usuário em telas, cadastros e etc' // Descrição explicativa no Swagger
    })
    // Declara a propriedade 'nome' do tipo string TypeScript
    nome: string;
    
    // Valida se o valor enviado no campo 'idade' é do tipo numérico (number)
    @IsNumber()
    // Documenta a propriedade no Swagger definindo um exemplo e uma descrição
    @ApiProperty({
        example: 18, // Exemplo de idade para a documentação
        description: 'Tipo:Number; Idade do usuario, apenas visual' // Descrição explicativa no Swagger
    })
    // Declara a propriedade 'idade' do tipo number TypeScript
    idade: number;
    
    // Valida se o valor enviado no campo 'cidade' é do tipo texto (string)
    @IsString()
    // Documenta a propriedade no Swagger definindo um exemplo e uma descrição
    @ApiProperty({
        example: 'Bauru', // Exemplo do nome da cidade
        description: 'Tipo:String; Cidade do usuário.' // Descrição explicativa no Swagger
    })
    // Declara a propriedade 'cidade' do tipo string TypeScript
    cidade: string;
    
    // Valida se o texto possui o formato de um e-mail válido (ex: usuario@dominio.com)
    @IsEmail()

    // Aplica a validação customizada para garantir que o e-mail seja único no banco de dados, com mensagem de erro personalizada
    @EmailUnico({message:"Ja existe um usuario com esse email."})

    // Valida se o campo 'email' é do tipo texto (string)
    @IsString()

    // Documenta a propriedade no Swagger definindo um exemplo e uma descrição
    @ApiProperty({
        example: 'robertosilva@hotmail.com', // Exemplo de e-mail para a documentação
        description: 'Tipo:String/email; Email do usuário, usado para login, identificação e comunicados' // Descrição explicativa no Swagger
    })
    // Declara a propriedade 'email' do tipo string TypeScript
    email: string;
    
    // Valida se o valor enviado no campo 'telefone' é do tipo texto (string)

    @IsString()
    // Documenta a propriedade no Swagger definindo um exemplo e uma descrição

    @ApiProperty({
        example: '9999999-9999', // Exemplo de telefone formatado
        description: 'Tipo:String; telefone do usuário' // Descrição explicativa no Swagger
    })
    // Declara a propriedade 'telefone' do tipo string TypeScript
    telefone: string;
    
    // Valida se o valor enviado no campo 'senha' é do tipo texto (string)
    @IsString()

    // Aplica a validação customizada para checar a força da senha, retornando a mensagem "Senha fraca" se falhar
    @SenhaForte({message:"Senha fraca"})
    
	// Documenta a propriedade no Swagger definindo um exemplo e uma descrição
    @ApiProperty({
        example: '#alocarsenha', // Exemplo de senha válida para ilustrar na documentação
        description: 'Tipo:String; Senha usada para login, deve seguir padrão de segurança minimo, evitando padrões.' // Descrição explicativa no Swagger
    })

    // Declara a propriedade 'senha' do tipo string TypeScript
    senha: string; 
    
    // Valida se o valor enviado no campo 'endereco' é do tipo texto (string)
    @IsString()

    // Documenta a propriedade no Swagger definindo um exemplo e uma descrição
    @ApiProperty({
        example: 'Rua Engenheiro Saint Martin, bairo Centro, numero 1020', // Exemplo de endereço completo
        description: 'Tipo:String; Endereço do usuário' // Descrição explicativa no Swagger
    })

    // Declara a propriedade 'endereco' do tipo string TypeScript
    endereco: string;

    // Valida se o valor enviado no campo 'novocampo' é do tipo texto (string)
    @IsString()
 
   // Documenta a propriedade no Swagger definindo um exemplo e uma descrição
    @ApiProperty({
        example: 'novo campo', // Exemplo para a documentação do novo campo
        description: 'novo campo' // Descrição informando a finalidade do novo campo
    })

    // Declara a propriedade 'novocampo' do tipo string TypeScript
    novocampo: string;
}
