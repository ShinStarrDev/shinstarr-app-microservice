import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TruckModule } from './truck/truck.module';

@Module({
  imports: [TruckModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
