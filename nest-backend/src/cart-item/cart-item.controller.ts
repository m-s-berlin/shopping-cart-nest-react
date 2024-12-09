import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { CartItemService } from './cart-item.service';
  
  @Controller('/cartItem')
  export class CartItemController {
    constructor(
      private readonly cartItemServive: CartItemService,
    ) {}
  
    @Post('/')
    postCartItem(@Body() body: any) {
      return this.cartItemServive.createCartItem(body);
    }

    @Put('/:id')
    putCartItem(@Param('id') id: string, @Body() body: any) {
      return this.cartItemServive.updateCartItem(Number(id), body);
    }
  
    @Delete('/:id')
    deleteCartItem(@Param('id') id: string) {
      return this.cartItemServive.deleteCartItem(Number(id))
    }
  }
  