import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';
import { ProductService } from './product/product.service';
import { CartService } from './cart/cart.service';
import { CartItemService } from './cart-item/cart-item.service';
import { ProductController } from './product/product.controller';
import { CartController } from './cart/cart.controller';
import { CartItemController } from './cart-item/cart-item.controller';

@Module({
  imports: [],
  controllers: [AppController, CategoryController, ProductController, CartController, CartItemController],
  providers: [AppService, PrismaService, CategoryService, ProductService, CartService, CartItemService],
})
export class AppModule {}
