import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getCheck(): string {
    return 'this is main server'
  }

  @Post('user')
  postCheck(@Body() data): string {
    return `main server post check: return ${data.data}`
  }
}
