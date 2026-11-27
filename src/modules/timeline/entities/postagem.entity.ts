export class Postagem {
  id: number;
  usuarioId: string;
  autor: string;
  avatar: string;
  conteudo: string;
  curtidas: number;
  comentarios: number;
  data: string;

  constructor(
    id: number,
    usuarioId: string,
    autor: string,
    avatar: string,
    conteudo: string,
    curtidas = 0,
    comentarios = 0,
    data: string = new Date().toISOString(),
  ) {
    this.id = id;
    this.usuarioId = usuarioId;
    this.autor = autor;
    this.avatar = avatar;
    this.conteudo = conteudo;
    this.curtidas = curtidas;
    this.comentarios = comentarios;
    this.data = data;
  }
}