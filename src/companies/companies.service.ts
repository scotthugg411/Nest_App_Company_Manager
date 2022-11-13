import { Injectable } from '@nestjs/common';
import e from 'express';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
  companiesList = [
    { companyId: 1, name: 'Facebook' },
    { companyId: 2, name: 'Amazon' },
    { companyId: 3, name: 'Apple' },
    { companyId: 4, name: 'Netflix' },
    { companyId: 5, name: 'Google' },
  ];

  create(createCompanyDto: CreateCompanyDto) {
    this.companiesList.push(createCompanyDto);
    return `added company ${createCompanyDto.name} successfully`;
  }

  findAll() {
    // find all companies
    return this.companiesList;
  }

  findOne(companyId: number) {
    return this.companiesList.filter((e) => e.companyId == companyId);
  }

  update(companyId: number, updateCompanyDto: UpdateCompanyDto) {
    const company = this.companiesList.find((e) => e.companyId == companyId);
    if (!company) {
      throw new Error('Company not found');
    }
    company.name = updateCompanyDto.name;
    return `updated company ${companyId} updated to ${company.name} successfully`;
  }

  remove(id: number) {
    const company = this.companiesList.find((e) => e.companyId == id);
    if (!company) {
      throw new Error('Company not found');
    }
    const index = this.companiesList.indexOf(company);
    this.companiesList.splice(index, 1);
    return `removed company ${id} successfully`;
  }
}
