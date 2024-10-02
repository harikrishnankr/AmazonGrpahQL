import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/Product';
import { Color } from './entity/Color';
import { Brand } from './entity/Brand';
import { Category } from './entity/Category';
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';
import { BrandResolver } from './brand.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Color, Brand, Category])],
  controllers: [ProductController, BrandController],
  providers: [ProductService, BrandService, BrandResolver],
})
export class ProductModule {}
