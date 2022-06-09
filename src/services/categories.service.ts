import { Injectable, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from "../database/entities/categories.entity";
import { ShowCategoriesDto, apiShowCategoriesProrerties } from "../controllers/categories/dto/show-categories.dto";
import { AddCategoryDto } from "../controllers/categories/dto/add-category.dto";
import { CreateCategoryResponse } from "../controllers/categories/interfaces/create-category-response.interface";
import { ShowCategoriesResponse } from "../controllers/categories/interfaces/show-categories-response.interface"

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository(CategoryEntity) private categoryRepository: Repository<CategoryEntity>
  ) {}

  async showCategories(dto: ShowCategoriesDto): Promise<[ShowCategoriesResponse] | any[]> {
    const parentCategoryId: number = dto.parentCategoryId > apiShowCategoriesProrerties.parentCategoryId.minimum ?
     dto.parentCategoryId :
     apiShowCategoriesProrerties.parentCategoryId.default;
    
    let offset: number = dto.offset;
    if (offset < apiShowCategoriesProrerties.offset.minimum) {
      offset = apiShowCategoriesProrerties.offset.minimum;
    } else if (offset > apiShowCategoriesProrerties.offset.maximum) {
      offset = apiShowCategoriesProrerties.offset.maximum;
    }

    let limit: number = dto.limit;
    if (limit < apiShowCategoriesProrerties.limit.minimum) {
      limit = apiShowCategoriesProrerties.limit.minimum;
    } else if (limit > apiShowCategoriesProrerties.limit.maximum) {
      limit = apiShowCategoriesProrerties.limit.maximum;
    }

    const results = await this.categoryRepository
      .createQueryBuilder("categories")
      .leftJoinAndSelect("products", "products", "products.categoryId=categories.id")
      .select([
        "categories.id as id", 
        "categories.parentCategoryId as parentCategoryId", 
        "categories.name as name", 
        "categories.description as description", 
        "categories.link as link", 
        "categories.imageLink as img",  
        "COUNT(products.id) as `productsCount`"
      ])
      .where('categories.parentCategoryId = :parentCategoryId', { parentCategoryId })
      .groupBy("categories.id")
      .offset(offset)
      .limit(limit)
      .getRawMany();
    
    Object.entries(results).map(([value])=>{results[value].productsCount = Number.parseInt(results[value].productsCount)});
      
    return results;
  }

  async addCategory(dto: AddCategoryDto): Promise<CreateCategoryResponse> {
    const categoryLink: string = dto.categoryName.toLocaleLowerCase().replace(/\s/g, "_");
    const category = await this.categoryRepository
    .createQueryBuilder()
    .insert()
    .into(CategoryEntity)
    .values({
      parentCategoryId: 0,
      name: dto.categoryName,
      description: dto.description,
      link: categoryLink
    })
    .execute();
    const response = new CreateCategoryResponse();
    response.categoryId = category.generatedMaps[0].id
    
    return response;
  }

  async addImage(dto) {
    

  }
}
