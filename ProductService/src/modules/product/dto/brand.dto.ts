import { Field, InputType } from '@nestjs/graphql';
import {
  IsAlphanumeric,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class BrandDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @IsAlphanumeric()
  name: string;
}

@InputType()
export class CreateBrandInput {
  @Field()
  name: string;
}
