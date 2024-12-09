import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Cart, Prisma } from '@prisma/client';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async readCart(id: number) {
    return this.prisma.cart.findUnique({
      where: { id },
      include: { cartItems: true },
    });
  }

  async createCart(data: Prisma.CartCreateInput): Promise<Cart> {
    return this.prisma.cart.create({
      data,
    });
  }

  async deleteCart(id: number) {
    return this.prisma.cart.delete({ where: { id } });
  }
}
