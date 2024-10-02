import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Color } from './Color';
import { Brand } from './Brand';
import { Category } from './Category';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  skuId: string;

  @Column()
  name: string;

  @OneToOne(() => Category, (category) => category.product)
  @JoinColumn()
  category: string;

  @Column()
  description: string;

  @OneToOne(() => Brand, (brand) => brand.product)
  @JoinColumn()
  brand: string;

  @ManyToMany(() => Color, (color) => color.products)
  @JoinTable() // This decorator is used on the owning side to indicate the junction table
  colors: Color[];

  @Column()
  modelNumber: string;
}
