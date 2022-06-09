import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './../database/entities/products.entity';
import { ProductsController } from './../controllers/products.controller';
import { ProductsService } from './../services/products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    ProductEntity
  ],
  controllers: [
    ProductsController
  ],
  providers: [
    ProductsService
  ],
  exports: [
    ProductsService
  ]
})
export class ProductsModule {}
