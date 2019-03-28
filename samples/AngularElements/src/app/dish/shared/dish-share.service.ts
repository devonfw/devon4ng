import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DishShareService {

  name;
  description;

  constructor() { }

  createDish(name, description): void {
    this.name = name;
    this.description = description;
  }
}
