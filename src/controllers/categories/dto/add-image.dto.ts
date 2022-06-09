import { ApiProperty } from "@nestjs/swagger";

export const apiAddImageProrerties = {
  imageName: {
    description: 'Name of image.'
  },
  categoryId: {
    description: 'Category id.',
    minimum: 1
  }
}

export class AddImageProperty {
  @ApiProperty(apiAddImageProrerties.imageName)
  imageName: string;

  @ApiProperty(apiAddImageProrerties.categoryId)
  categoryId: number;
}

export class AddImageDto {
  readonly imageName: string;
  readonly categoryId: number;
}
