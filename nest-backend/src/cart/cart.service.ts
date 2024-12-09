import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Cart, Prisma } from '@prisma/client';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async readCart() {
    return this.prisma.cart.findUnique;
  }

  async createCart(data: Prisma.CartCreateInput): Promise<Cart> {
    return this.prisma.cart.create({
      data,
    });
  }

  async updateCart(id: number, data: Prisma.CartUpdateInput) {
    return this.prisma.cart.update({
      where: { id: id },
      data,
    });
  }

  async deleteCart(id: number) {
    return this.prisma.cart.delete({ where: { id: id } });
  }
}
