import * as bcrypt from 'bcrypt';

export class Usuario{
    id: string;
    nome: string;
    idade: number;
    cidade: string;
    email: string;
    telefone: string;
    senha: string; 
    endereco: string;

    constructor(id:string, nome: string, idade: number, cidade: string, email: string, 
                telefone:string,senha:string,endereco:string) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
        this.email = email;
        this.telefone = telefone;
        this.senha = senha;
        this.endereco = endereco;
    }

    trocaSenha(senha: string){
        const saltOrRounds= 10;
        this.senha = bcrypt.hashSync(senha,saltOrRounds);
    }

    login (senha:string){
        return bcrypt.compareSync(senha,this.senha)
    }
}


// Entity: Treino (Tela: Treino)
export class Treino {
  id: string;
  usuarioId: string;
  titulo: string;
  descricao: string;
  duracaoMinutos: number;

  constructor(id: string, usuarioId: string, titulo: string, descricao: string, duracaoMinutos: number) {
    this.id = id;
    this.usuarioId = usuarioId;
    this.titulo = titulo;
    this.descricao = descricao;
    this.duracaoMinutos = duracaoMinutos;
  }
}

// Entity: Post (Telas: Feed, Post)
export class Post {
  id: string;
  usuarioId: string;
  conteudo: string;
  criadoEm: Date;

  constructor(id: string, usuarioId: string, conteudo: string, imagemUrl?: string) {
    this.id = id;
    this.usuarioId = usuarioId;
    this.conteudo = conteudo;
    this.criadoEm = new Date();
  }
}

// Entity: Parceiro (Tela: Parceiros)
export class Parceiro {
  id: string;
  nomeEmpresa: string;
  descricao: string;
  siteUrl: string;

  constructor(id: string, nomeEmpresa: string, descricao: string, siteUrl: string) {
    this.id = id;
    this.nomeEmpresa = nomeEmpresa;
    this.descricao = descricao;
    this.siteUrl = siteUrl;
  }
}
