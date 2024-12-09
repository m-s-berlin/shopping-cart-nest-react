import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CategoryService } from './category/category.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly categoryServive: CategoryService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
