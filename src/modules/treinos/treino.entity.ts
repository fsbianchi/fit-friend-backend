import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity.js';

@Entity({ name: 'tb_treinos' })
export class Treino {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100, nullable: false })
  titulo: string; // Ex: "Futebol", "Musculação", "Corrida"

  @Column({ type: 'text', nullable: false })
  descricao: string; // Caixa de texto livre contendo todas as observações do esporte/treino

  @CreateDateColumn()
  dataCriacao: Date;

  @ManyToOne(() => Usuario, (usuario) => usuario.treinos, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;
}
