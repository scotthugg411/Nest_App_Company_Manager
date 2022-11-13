import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService],
  imports: [UsersModule, ProductsModule],
})
export class CompaniesModule {}
