import { Module } from '@nestjs/common';
import {ConfigModule} from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './modules/products.module';
import { CategoriesModule } from './modules/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
   }),
   TypeOrmModule.forRoot({entities: [
     ProductsModule,
     CategoriesModule
    ]}),
   ProductsModule,
   CategoriesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
