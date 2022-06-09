import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './../services/products.service';
import { ProductEntity } from "./../database/entities/products.entity";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";


@ApiTags('Products')
@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({summary: 'Return products'})
  @ApiResponse({status: 200, type: [ProductEntity]})
  @Get()
  getAllProducts(): Promise<ProductEntity[]> {
    return this.productsService.getAllProducts();
  }
}
