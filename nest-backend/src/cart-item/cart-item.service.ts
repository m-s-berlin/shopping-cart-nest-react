import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CartItem, Prisma } from '@prisma/client';

@Injectable()
export class CartItemService {
  constructor(private prisma: PrismaService) {}

  async createCartItem(data: Prisma.CartItemCreateInput): Promise<CartItem> {
    return this.prisma.cartItem.create({
      data,
      include: { product: true },
    });
  }

  async updateCartItem(id: number, data: Prisma.CartItemUpdateInput) {
    return this.prisma.cartItem.update({
      where: { id: id },
      data,
    });
  }

  async deleteCartItem(id: number) {
    return this.prisma.cartItem.delete({ where: { id } });
  }
}
