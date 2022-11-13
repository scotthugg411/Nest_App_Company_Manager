import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * This is the base app controller
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  /**
   * This handles get requests to the base route
   */
  @Get()
  getHello(): object {
    return this.appService.getHello();
  }
}
