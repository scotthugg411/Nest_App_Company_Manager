import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Controller('companies/:companyId/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  async findAll(@Param('companyId') companyId: string): Promise<Product[]> {
    return this.productsService.findAll(+companyId);
  }

  /**
   * This is the get request to companies/:companyId/products/:productId
   * @param companyId
   * @param productId
   * @returns
   */
  @Get(':productId')
  findOne(
    @Param('companyId') companyId: string,
    @Param('productId') productId: string,
  ) {
    return this.productsService.findOne(+companyId, +productId);
  }

  @Patch(':productId')
  update(
    @Param('productId') productId: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(+productId, updateProductDto);
  }

  @Delete(':productId')
  remove(@Param('productId') productId: string) {
    return this.productsService.remove(+productId);
  }
}
