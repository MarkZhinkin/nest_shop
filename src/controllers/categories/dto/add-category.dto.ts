import { ApiProperty } from "@nestjs/swagger";

export const apiAddCategoryProrerties = {
  categoryName: {
    description: 'Category name.', 
    required: true
  },
  description: {
    description: 'Category description.',
    default: null
  },
}

export class AddCategoryProperty {
  @ApiProperty(apiAddCategoryProrerties.categoryName)
  categoryName: string;

  @ApiProperty(apiAddCategoryProrerties.description)
  description: string;
}

export class AddCategoryDto {
  readonly categoryName: string;
  readonly description: string | null;
}
