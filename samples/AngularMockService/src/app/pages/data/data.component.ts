import { Component, OnInit } from '@angular/core';

/** When it comes to navigating back and forth, it's best to interact with the location servuce on the page level */
import { Location } from '@angular/common';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit() {}

  goBack(): void {
    this.location.back();
  }
}
