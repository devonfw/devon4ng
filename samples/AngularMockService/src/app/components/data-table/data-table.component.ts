import { Component, OnInit } from '@angular/core';

// import the model (interface) which is used in this component
import { PeriodicElement } from '../../models/periodicElement';

//import the service which will process data of the model type.
import { ChemicalElementsService } from '../../services/chemical-elements.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'actions'];
  elements: PeriodicElement[] = [];

  constructor(private chemicalElementsService: ChemicalElementsService) { }

  ngOnInit() {
    this.getElements();
  }

  getElements(): void {
    this.chemicalElementsService.getElements().subscribe(result => this.elements = result);
  }


  deleteElement(element: PeriodicElement): void {
    this.elements = this.elements.filter(item => item.position !== element.position);
  }


}
