import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from './entity/Brand';
import { QueryFailedError, Repository } from 'typeorm';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}

  public createBrand(brandName: string): Promise<Brand> {
    try {
      const brand = new Brand();
      brand.name = brandName;
      return this.brandRepository.save(brand);
    } catch (error) {
      throw new QueryFailedError('query', [], error);
    }
  }

  public getBrandById(id: number): Promise<Brand> {
    try {
      return this.brandRepository.findOneBy({ id });
    } catch (error) {
      throw new QueryFailedError('query', [], error);
    }
  }

  public async getAllBrands(): Promise<Brand[]> {
    try {
      const brands = await this.brandRepository.find();
      return brands;
    } catch {
      throw new NotFoundException();
    }
  }
}
