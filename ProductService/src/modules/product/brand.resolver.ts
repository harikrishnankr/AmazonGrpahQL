import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BrandService } from './brand.service';
import { CreateBrandInput } from './dto/brand.dto';
import { UseFilters } from '@nestjs/common';
import { AllExceptionsFilter } from 'src/common/filters/exception.filter';

@Resolver('Brand')
@UseFilters(AllExceptionsFilter)
export class BrandResolver {
  constructor(private brandService: BrandService) {}

  @Query('brands')
  async getBrands() {
    return this.brandService.getAllBrands();
  }

  @Query('brand')
  async getBrandById(@Args('id') id: number) {
    return this.brandService.getBrandById(id);
  }

  @Mutation('createBrand')
  async createBrand(@Args('input') createBrandInput: CreateBrandInput) {
    return this.brandService.createBrand(createBrandInput.name);
  }
}
