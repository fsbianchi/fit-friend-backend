// Importa funções e interfaces do class-validator para criação de decoradores personalizados
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

// Importa o serviço responsável pela busca e gerenciamento dos usuários
import { usuariosCadastrados } from "../usuario.service.js";

// Importa o decorador Injectable do NestJS para permitir Injeção de Dependências
import { Injectable } from "@nestjs/common";

// Permite que o NestJS injete o serviço `usuariosCadastrados` no construtor desta classe
@Injectable()

// Registra a regra de validação e avisa ao class-validator que ela realiza operações assíncronas (como consultas ao banco)
@ValidatorConstraint({ async: true })

// Declara a classe de validação implementando a interface contratual do class-validator
export class emailValidainfo implements ValidatorConstraintInterface {
    
    // Injeta a dependência do serviço de usuários no construtor
    constructor(private usuariosCadastrados: usuariosCadastrados) {}

    // Método assíncrono chamado automaticamente para validar o valor do campo (e-mail)
    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        
        // Chama o método do serviço para verificar se o e-mail já existe cadastrado
        const validarEmail = await this.usuariosCadastrados.validaEmail(value);

        // Retorna o inverso: se `validaEmail` for verdadeiro (já existe), retorna `false` (validação falhou)
        return !validarEmail;
    }
}

// Função fábrica do decorador `@EmailUnico()` que pode receber opções (como mensagens de erro)
export const EmailUnico = (opcoesValidacao: ValidationOptions) => {
    
    // Retorna a função que se aplica sobre a propriedade decorada do DTO
    return (objeto: Object, propriedade: string) => {
        
        // Vincula a regra de validação à propriedade da classe DTO
        registerDecorator({
            
            // Aponta para a classe DTO onde o decorador foi inserido
            target: objeto.constructor,

            // Define o nome do campo decorado (ex: 'email')
            propertyName: propriedade,

            // Passa as opções de validação configuradas (ex: mensagem de erro customizada)
            options: opcoesValidacao,

            // Lista de restrições adicionais (vazia neste caso)
            constraints: [],

            // Aponta para a classe que contém a lógica de verificação (`emailUnicoValidator`)
            validator: emailUnicoValidator
        });
    };
};
