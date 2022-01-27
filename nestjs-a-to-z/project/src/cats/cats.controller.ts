import { CatsService } from './cats.service';
import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private readonly CatsService: CatsService) {}

  //* cats/
  @Get()
  getAllCat() {
    return 'all cat';
  }
  //* cats/:id
  @Get(':id')
  getOneCat() {
    return 'one cate';
  }

  @Post()
  createCat() {
    return 'new cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return 'update';
  }

  @Delete(':id')
  deleteCat() {
    return 'delete';
  }
}
