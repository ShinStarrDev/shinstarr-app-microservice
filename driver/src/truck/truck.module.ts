import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TruckController } from './truck.controller';
import { TruckService } from './truck.service';

@Module({
  imports: [HttpModule],
  controllers: [TruckController],
  providers: [TruckService]
})
export class TruckModule {}
