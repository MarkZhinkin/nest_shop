import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';


@Entity('products')
export class ProductEntity {
  @ApiProperty({ example: '120', description: 'Product id.' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '0', description: 'Category id.' })
  @Index("ix_product_categoryId")
  @Column({ nullable: false, default: 0})
  categoryId: number;

  @ApiProperty({ example: 'Одноразовая Pod система Elf Bar 800 BANANA ICE', description: 'Product name.' })
  @Column({ length: 128, nullable: false })
  name: string;
  
  @ApiProperty({ example: 'BANANA ICE – ВКУС НАСТОЯЩЕГО ЛЕТА В КАРМАНЕ ...', description: 'Product description.' })
  @Column({ nullable: true, default: null  })
  description: string;

  @ApiProperty({ example: '1000', description: 'Base price.' })
  @Index("ix_product_price")
  @Column({ nullable: false })
  price: number;

  @ApiProperty({ example: '800', description: 'Discount price.' })
  @Index("ix_product_discountPrice")
  @Column({ nullable: true, default: null })
  discountPrice: number;
  
  @ApiProperty({ example: 'true', description: 'Available.' })
  @Index("ix_product_available")
  @Column({ nullable: false, default: true })
  available: boolean;

  @ApiProperty({ example: '153', description: 'Products amount.' })
  @Column({ nullable: false, default: 0 })
  amount: number;

  @ApiProperty({ example: '5', description: 'Rating.' })
  @Index("ix_product_rating")
  @Column({ nullable: false, default: 0 })
  rating: number;

  @ApiProperty({ example: 'products/banana-ice', description: 'Url slug.' })
  @Column({ length: 128, nullable: false })
  link: string;

  @ApiProperty({ example: 'product/banana-icewp-content-1.jpg', description: 'Image slug.' })
  @Column({ nullable: true, default: null })
  imagelink: string;

  @ApiProperty({ example: '{"brand": "Elf Bar"}', description: 'Product characteristics.' })
  @Column({ nullable: false, default: "{}" })
  characteristics: string;
}
