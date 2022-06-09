import { ApiProperty } from '@nestjs/swagger';

export class ShowCategoriesResponse {
    @ApiProperty({ example: '1', description: 'Category id.' })
    id: number;

    @ApiProperty({ example: '0', description: 'Parent category id.' })
    parentCategoryId: number;

    @ApiProperty({ example: 'ELFBAR 800', description: 'Category name.' })
    name: string;

    @ApiProperty({ example: 'ELFBAR 800 and some descriptions ...', description: 'Category description.' })
    description: string;

    @ApiProperty({ example: 'elfbar_800', description: 'Category reltive link.' })
    link: string;

    @ApiProperty({ example: 'categories/elfbar_800/some_name.jpg', description: 'Image reltive link.' })
    img: string;

    @ApiProperty({ example: '10', description: 'Products count in current category.' })
    productsCount: number;
}
