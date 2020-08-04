import { Component, OnInit } from '@angular/core';

//import the data model (interface) for this component
import { PeriodicElement } from '../../models/periodicElement';

//import the service that handles the data model
import {ChemicalElementsService} from '../../services/chemical-elements.service';


@Component({
  selector: 'app-favorite-elements',
  templateUrl: './favorite-elements.component.html',
  styleUrls: ['./favorite-elements.component.scss']
})
export class FavoriteElementsComponent implements OnInit {

  elements: PeriodicElement[] = [];

  constructor( private chemicalElementsService: ChemicalElementsService ) { }

  ngOnInit() {
    this.getFavoriteElements();
  }

  getFavoriteElements(): void {
    this.chemicalElementsService.getFavoriteElements().subscribe(result => this.elements = result);
  }

}
