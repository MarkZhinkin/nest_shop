import { Controller, Get, Post, Put, Query, Body } from '@nestjs/common';
import { CategoriesService } from '../../services/categories.service';
import { ApiOperation, ApiOkResponse, ApiInternalServerErrorResponse, ApiTags } from "@nestjs/swagger";
import { ShowCategoriesProperty } from "./dto/show-categories.dto";
import { AddCategoryProperty } from "./dto/add-category.dto";
import { CreateCategoryResponse } from "./interfaces/create-category-response.interface"
import { InternalErrorResponse } from "./interfaces/internal-errors.interface"
import { ShowCategoriesResponse } from "./interfaces/show-categories-response.interface"


@ApiTags("Categories")
@Controller("categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @ApiOperation({summary: 'Return categories'})
  @ApiOkResponse({status: 200, type: [ShowCategoriesResponse]})
  @ApiInternalServerErrorResponse({status: 500, type: InternalErrorResponse})
  @Get()
  async showCategories(@Query() dto: ShowCategoriesProperty): Promise<[ShowCategoriesResponse] | any[]> {
    return await this.categoriesService.showCategories(dto);
  }

  @Put()
  @ApiOkResponse({status: 201, type: CreateCategoryResponse})
  @ApiInternalServerErrorResponse({status: 500, type: InternalErrorResponse})
  async addCategory(@Body() dto: AddCategoryProperty): Promise<CreateCategoryResponse> {
    return await this.categoriesService.addCategory(dto);
  }

  // @Post()
  // @ApiOkResponse({status: 201, type: CreateCategoryResponse})
  // @ApiInternalServerErrorResponse({status: 500, type: InternalErrorResponse})
  // async changeImage(@Body() dto: AddCategoryProperty): Promise<CreateCategoryResponse> {
  //   return await this.categoriesService.addCategory(dto);
  // }

}
