import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuariosCadastrados } from "../usuario.service.js";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class emailValidainfo implements ValidatorConstraintInterface {
    
    constructor(private usuariosCadastrados: UsuariosCadastrados) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        // Busca o usuário usando o método correto do serviço
        const usuarioExistente = await this.usuariosCadastrados.buscaEmail(value);

        // Se encontrou usuário, retorna false (validação de e-mail único falhou)
        // Se não encontrou (null), retorna true (e-mail disponível)
        return !usuarioExistente;
    }
}

export const EmailUnico = (opcoesValidacao?: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesValidacao,
            constraints: [],
            validator: emailValidainfo
        });
    };
};
