import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Product } from './Product';

@Entity('color')
export class Color {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  hexCode: string;

  @ManyToMany(() => Product, (product) => product.colors)
  products: Product[];
}
