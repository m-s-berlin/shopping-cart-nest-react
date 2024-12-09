import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { ProductService } from './product.service';
  
  @Controller()
  export class ProductController {
    constructor(
      private readonly productServive: ProductService,
    ) {}
  
    @Get('/product')
    getProduct() {
      return this.productServive.readProducts();
    }
  
    @Post('/product')
    postProduct(@Body() body: any) {
      return this.productServive.createProduct(body);
    }
  
    @Delete('/product/:id')
    deleteProduct(@Param('id') id: string) {
      return this.productServive.deleteProduct(Number(id))
    }
  }
  