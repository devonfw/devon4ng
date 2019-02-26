import { Component, OnInit } from '@angular/core';
import { DishShareService } from '../shared/dish-share.service';

@Component({
  templateUrl: './dishview.component.html',
  styleUrls: ['./dishview.component.scss']
})
export class DishviewComponent implements OnInit {


  dishname;
  dishdescription;

  constructor(public dishShareService: DishShareService) { }

  ngOnInit() {
    this.dishname = this.dishShareService.name;
    this.dishdescription = this.dishShareService.description;
  }

}
