import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MY_THAI_STAR_DISH } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getDishes() {
    return this.http.get(MY_THAI_STAR_DISH);
  }
}
