import { productsDataStore } from './products_data_store';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  productsList = productsDataStore;

  create(createProductDto: CreateProductDto) {
    this.productsList.push(createProductDto);
    return `added company ${createProductDto.name} successfully`;
  }
  /**
   * find all products by company id
   * @param companyId
   * @returns all products for a company
   */
  findAll(companyId: number) {
    return this.productsList.filter((el) => el.companyId == companyId);
  }
  /**
   * findOne
   * This is the findOne method for specific product within a specific company
   * @param companyId
   * @param productId
   * @returns specific product within a specific company
   */
  findOne(companyId: number, productId: number) {
    return this.productsList.filter(
      (e) => e.productId == productId && e.companyId == companyId,
    );
  }

  update(productId: number, updateProductDto: UpdateProductDto) {
    const product = this.productsList.find((e) => e.productId == productId);
    if (!product) {
      throw new Error('Company not found');
    }
    // TODO this only accounts for updating the product name, could update other
    // properties as they become available
    product.name = updateProductDto.name;
    return `updated company ${productId} updated to ${product.name} successfully`;
  }

  remove(id: number) {
    const product = this.productsList.find((e) => e.productId == id);
    if (!product) {
      throw new Error('Company not found');
    }
    const index = this.productsList.indexOf(product);
    this.productsList.splice(index, 1);
    return `removed company ${id} successfully`;
  }
}
