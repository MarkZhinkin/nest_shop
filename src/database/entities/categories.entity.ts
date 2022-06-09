import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';


@Entity('categories')
export class CategoryEntity {
  @ApiProperty({ example: '1', description: 'Category id.' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '0', description: 'Parent category id.' })
  @Index("ix_category_parentCategoryId")
  @Column({ nullable: false, default: 0})
  parentCategoryId: number;

  @ApiProperty({ example: 'ELFBAR 800', description: 'Category name.' })
  @Column({ length: 128, nullable: false })
  name: string;
  
  @ApiProperty({ example: 'ELFBAR 800 and some descriptions ...', description: 'Category description.' })
  @Column({ nullable: true, default: null })
  description: string;

  @ApiProperty({ example: 'elfbar_800', description: 'Category relative link.' })
  @Column({ length: 128, nullable: false})
  link: string;

  @ApiProperty({ example: 'categories/elfbar_800/some_name.jpg', description: 'Image relative link.' })
  @Column({ nullable: true, default: null })
  imageLink: string;
}
