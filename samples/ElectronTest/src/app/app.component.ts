import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Devon4ngAngularElementsTest';
  ngOnInit(): void {
    //this.createComponent();
  }
  createComponent(): void {
    const container = document.getElementById('container');
    const component = document.createElement('dish-form');
    container.appendChild(component);
  }
}
