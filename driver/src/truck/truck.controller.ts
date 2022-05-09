import { Controller, Get } from '@nestjs/common';
import { TruckService } from './truck.service';

@Controller('truck')
export class TruckController {
  constructor(private truckService: TruckService) {}
  @Get()
  getMain() {
    return this.truckService.findAll()
  }
}
