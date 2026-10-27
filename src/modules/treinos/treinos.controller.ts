import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Usuario } from '../usuarios/usuario.entity.js';

@Entity('treinos')
export class Treino {
  @ApiProperty({
    description: 'Identificador único do treino (UUID)',
    example: 'd3b07384-d113-424a-a71f-0e10405106a7',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'Musculação' })
  @Column()
  esporte: string;

  @ApiProperty({ example: 'Hipertrofia - Membros Superiores' })
  @Column()
  foco: string;

  @ApiProperty({ example: '1h 30min' })
  @Column({ name: 'duracao_estimada' })
  duracaoEstimada: string;

  @ApiProperty({ example: 'Segunda-feira' })
  @Column()
  dia: string;

  @ApiProperty({ example: ['Supino Reto', 'Desenvolvimento'] })
  @Column('simple-array', { name: 'exercicios_principais' })
  exerciciosPrincipais: string[];

  @ApiProperty({ type: () => Usuario })
  @ManyToOne(() => Usuario, (usuario) => usuario.treinos, { onDelete: 'CASCADE' })
  usuario: Usuario;
}
