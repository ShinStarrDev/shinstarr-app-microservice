import { Injectable } from '@nestjs/common';
import * as os from 'os';
@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! driver server - host: ${os.hostname}`;
  }
  
  getDriverServer(): string {
    return `Hello World! driver server - host: ${os.hostname}`;
  }
}
