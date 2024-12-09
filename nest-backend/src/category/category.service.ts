import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Category, Prisma } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async createCategory(data: Prisma.CategoryCreateInput): Promise<Category> {
    return this.prisma.category.create({
      data,
    });
  }

  async getCategories() {
    return this.prisma.category.findMany({});
  }

  async deleteCategory(id: number) {
    return this.prisma.category.delete({ where: { id: id } });
  }
}
