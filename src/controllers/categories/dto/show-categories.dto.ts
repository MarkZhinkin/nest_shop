import { ApiProperty } from "@nestjs/swagger";

export const apiShowCategoriesProrerties = {
  parentCategoryId: {
    description: 'Parent category id.',
    minimum: 0,
    default: 0,
  },
  limit: {
    description: 'Categories quantity.',
    minimum: 10,
    maximum: 20,
    default: 10,
  },
  offset: {
    description: 'How much categories need to offset.',
    minimum: 0,
    maximum: 20,
    default: 0,
  }
}

export class ShowCategoriesProperty {
  @ApiProperty(apiShowCategoriesProrerties.parentCategoryId)
  parentCategoryId: number;

  @ApiProperty(apiShowCategoriesProrerties.limit)
  limit: number;

  @ApiProperty(apiShowCategoriesProrerties.offset)
  offset: number;
}

export class ShowCategoriesDto {
  readonly parentCategoryId: number;
  readonly limit: number;
  readonly offset: number;
}
