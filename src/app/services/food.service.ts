import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FoodService {
  public url: string;
  constructor(public _http: HttpClient) {
    this.url = '../../assets/foods.ts';
  }
  getFood() {
    return this._http.get(this.url);
  }
}
