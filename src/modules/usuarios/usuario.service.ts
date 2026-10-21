import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity.js";
import {v4 as uuid} from 'uuid';
import { alterUsuariodto } from "./dto/alterUsuariodto.js";

@Injectable()
export class UsuariosCadastrados{
    #usuarios:Usuario[] = [];

    constructor() {

    }

    adicionaUsuario(dadosUsuario: any){
        let usuario = new Usuario(uuid(), dadosUsuario.nome,
                    dadosUsuario.idade, dadosUsuario.cidade, dadosUsuario.email, 
                    dadosUsuario.telefone, dadosUsuario.senha, dadosUsuario.endereco
        )
        this.#usuarios.push(usuario);
        return usuario.id;
    }

    retornaUsuarios(){
        return this.#usuarios;
    }

    retornaUsuarioID(id:string){
        const possivelUsuario = this.#usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id
        )
         if(!possivelUsuario){
            throw new Error('Usuario não localizado')
        }
        return possivelUsuario;
    }

    async validaEmail(email: string){
        const possivelUsuario = this.#usuarios.find(
            usuario => usuario.email === email
        );
        return (possivelUsuario !== undefined);
    }

    async atualizaUsuario(id: string, dadosAtualizacao: alterUsuariodto){
        let possivelUsuario = this.retornaUsuarioID(id);
        Object.entries(dadosAtualizacao).forEach(
            ([chave,valor]) => {
                if(chave == 'id'){
                    return;
                }else if (valor === undefined) {
                    return;
                }else if( chave == 'senha'){
                    possivelUsuario.trocaSenha(valor)
                }
                (possivelUsuario as any)[chave] = valor;
            }
        )
        return possivelUsuario.id;
    }

    async apagaUsuario(id:string){
        let possivelUsuario = this.retornaUsuarioID(id);

        this.#usuarios = this.#usuarios.filter(
            usuarioSalvo => usuarioSalvo.id !== id
        )

        return possivelUsuario;
    }

    async buscaEmail(email:string){
        const possivelUsuario = this.#usuarios.find(
            usuario => usuario.email === email
        );
        if(!possivelUsuario){
            throw new Error('Usuario não localizado')
        }
        return possivelUsuario;
    }

    async validaLogin(email:string, senha:string){
        const possivelUsuario = await this.buscaEmail(email)
        if (possivelUsuario.login(senha)){
            return possivelUsuario;
        }else{
            return null ;
        }
    }
}
