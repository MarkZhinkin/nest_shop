import { Injectable } from '@nestjs/common';
import { ProductEntity } from "./../database/entities/products.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private productsRepository: Repository<ProductEntity>
    ) {}

  async getAllProducts(): Promise<ProductEntity[]> {
      const products = await this.productsRepository.find();
      return products;
  }
}
