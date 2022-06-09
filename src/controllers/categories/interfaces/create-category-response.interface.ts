import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryResponse {
    @ApiProperty({ example: '1', description: 'Created category id.' })
    categoryId: number
}
