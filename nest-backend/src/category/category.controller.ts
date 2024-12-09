import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller()
export class CategoryController {
  constructor(
    private readonly categoryServive: CategoryService,
  ) {}

  @Get('/category')
  getCategory() {
    return this.categoryServive.getCategories();
  }

  @Post('/category')
  postCategory(@Body() body: any) {
    return this.categoryServive.createCategory(body);
  }

  @Delete('/category/:id')
  deleteCategory(@Param('id') id: string) {
    return this.categoryServive.deleteCategory(Number(id))
  }
}
