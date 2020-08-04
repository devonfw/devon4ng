import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

// import the model (interface) which allows to cast it's type to the service properties
import {PeriodicElement} from '../models/periodicElement';

// import the mock data (will be replaced in the future) 
import {ELEMENT_DATA} from '../mocks/elementData';


@Injectable({
  providedIn: 'root'
})

export class ChemicalElementsService {

  constructor() { }

  public getElements(): Observable<PeriodicElement[]> {
    return of(ELEMENT_DATA);
  }

  public getElementAtPosition(pos: number): Observable<PeriodicElement> {
    return of(ELEMENT_DATA.find(element => element.position === pos));
  }

  public getFavoriteElements(): Observable<PeriodicElement[]> {
    return of(ELEMENT_DATA.slice(0, 3));
  }
}
