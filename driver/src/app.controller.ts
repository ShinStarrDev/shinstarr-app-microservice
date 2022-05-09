import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('driver')
  getDriverServer(): string {
    return this.appService.getDriverServer()
  }

  @Get('another')
  getAnother(): string {
    return 'is another api check'
  }

  @Post('driver')
  getCheck(@Body() data): string {
    return `driver server post check: return ${data.data}`
  }
}
