import { Body, Controller, Get, Post } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandDto } from './dto/brand.dto';

@Controller('brand')
export class BrandController {
  constructor(private brandService: BrandService) {}

  @Post()
  public createBrand(@Body() request: BrandDto) {
    const { name } = request;
    return this.brandService.createBrand(name);
  }

  @Get()
  public getAllBrands() {
    return this.brandService.getAllBrands();
  }
}
