import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { CartItemService } from './cartItem.service';
  
  @Controller()
  export class CartItemController {
    constructor(
      private readonly cartItemServive: CartItemService,
    ) {}
  
    @Get('/cartItem')
    getCartItems() {
      return this.cartItemServive.readCartItems();
    }
  
    @Post('/cartItem')
    postCartItem(@Body() body: any) {
      return this.cartItemServive.createCartItem(body);
    }

    @Put('/cartItem')
    putCartItem(@Param('id') id: string, @Body() body: any) {
      return this.cartItemServive.updateCartItem(Number(id), body);
    }
  
    @Delete('/cartItem/:id')
    deleteCartItem(@Param('id') id: string) {
      return this.cartItemServive.deleteCartItem(Number(id))
    }
  }
  