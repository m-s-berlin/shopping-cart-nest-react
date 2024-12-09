import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { CartService } from './cart.service';
  
  @Controller()
  export class CartController {
    constructor(
      private readonly cartServive: CartService,
    ) {}
  
    @Get('/cart')
    getCart() {
      return this.cartServive.readCart();
    }
  
    @Post('/cart')
    postCart(@Body() body: any) {
      return this.cartServive.createCart(body);
    }

    @Put('/cart')
    putCart(@Param('id') id: string, @Body() body: any) {
      return this.cartServive.updateCart(Number(id), body);
    }
  
    @Delete('/cart/:id')
    deleteCart(@Param('id') id: string) {
      return this.cartServive.deleteCart(Number(id))
    }
  }
