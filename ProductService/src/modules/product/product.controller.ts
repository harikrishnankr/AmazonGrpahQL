import { Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './entity/Product';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/list')
  public getProducts(): Promise<Product[]> {
    return this.productService.getProductList();
  }

  @Post()
  public createProduct() {}
}
