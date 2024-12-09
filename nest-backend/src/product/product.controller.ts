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
  
  @Controller('/product')
  export class ProductController {
    constructor(
      private readonly productServive: ProductService,
    ) {}
  
    @Get('/')
    getProduct() {
      return this.productServive.readProducts();
    }
  
    @Post('/')
    postProduct(@Body() body: any) {
      return this.productServive.createProduct(body);
    }
  
    @Delete('/:id')
    deleteProduct(@Param('id') id: string) {
      return this.productServive.deleteProduct(Number(id))
    }
  }
  