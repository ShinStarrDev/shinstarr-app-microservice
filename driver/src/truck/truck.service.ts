import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class TruckService {
  constructor(private httpService: HttpService) {}

  findAll(): Observable<AxiosResponse> {
    const data = this.httpService.get('http://nginx:80', {
      headers: {
        'Accept': 'application/json'
      }
    }).pipe(
      map(response => response.data)
    )
    console.log(data)
    return data
  }
}
