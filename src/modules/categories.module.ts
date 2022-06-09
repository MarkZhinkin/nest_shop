import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './../database/entities/categories.entity';
import { CategoriesController } from '../controllers/categories/categories.controller';
import { CategoriesService } from './../services/categories.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryEntity]),
    CategoryEntity
  ],
  controllers: [
    CategoriesController
  ],
  providers: [
    CategoriesService
  ],
  exports: [
    CategoriesService
  ]
})
export class CategoriesModule {}
