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
  
  @Controller('/cart')
  export class CartController {
    constructor(
      private readonly cartServive: CartService,
    ) {}
  
    @Get('/:id')
    getCart(@Param('id') id: string) {
      return this.cartServive.readCart(Number(id));
    }
  
    @Post('/')
    postCart(@Body() body: any) {
      return this.cartServive.createCart(body);
    }

  
    @Delete('/:id')
    deleteCart(@Param('id') id: string) {
      return this.cartServive.deleteCart(Number(id))
    }
  }
