// Importa o decorador Injectable do NestJS para permitir injeção de dependências
import { Injectable } from "@nestjs/common";

// Importa os utilitários do class-validator necessários para criar um decorador de validação personalizado
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

// Importa a biblioteca zxcvbn, usada para estimar a força e complexidade de senhas
import zxcvbn from 'zxcvbn';

// Define a classe como injetável pelo container de Injeção de Dependências do NestJS
@Injectable()

// Registra a classe como uma restrição (regra) de validação do class-validator, informando que é assíncrona
@ValidatorConstraint({ async: true })

// Declara a classe de validação implementando a interface obrigatória do class-validator
export class senhaValidainfo implements ValidatorConstraintInterface {
    
    // Construtor padrão da classe (pode ser usado para injetar outros serviços se necessário)
    constructor() {}

    // Método principal que executa a regra de validação sobre o valor recebido
    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        
        // Avalia a senha informada (`value`) usando a biblioteca zxcvbn e armazena o resultado com score de 0 a 4
        const result = zxcvbn(value);

        // Verifica se a pontuação da senha é igual ou maior a 3 (3 = forte, 4 = muito forte)
        var validarSenha = (result.score >= 3);

        // Retorna true (validação passou) se a senha for forte, ou false (validação falhou) se for fraca
        return validarSenha;
    }
}

// Declara a função do decorador customizado `@SenhaForte` que aceita opções como mensagens de erro personalizadas
export const SenhaForte = (opcoesValidacao: ValidationOptions) => {
    
    // Retorna a função de decorador de propriedade aceitando o objeto alvo e o nome do campo decorado
    return (objeto: Object, propriedade: string) => {
        
        // Registra formalmente a validação personalizada na propriedade dentro da estrutura do class-validator
        registerDecorator({
            
            // Define a classe construtora do DTO onde o decorador foi aplicado
            target: objeto.constructor,

            // Define o nome da propriedade/campo que está sendo validado (ex: 'senha')
            propertyName: propriedade,

            // Repassa as opções de validação recebidas (ex: { message: 'Senha fraca' })
            options: opcoesValidacao,

            // Lista de restrições ou parâmetros adicionais (vazia neste caso)
            constraints: [],

            // Aponta para a classe que contém a lógica de validação (`senhaForteValidator`)
            validator: senhaValidainfo
        });
    };
};
