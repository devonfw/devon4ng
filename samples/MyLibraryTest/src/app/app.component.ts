import { Component, OnInit } from '@angular/core';
import { MyLibraryService } from 'my-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  toUpper: string;
  title = 'devon4ng-library-test';

  constructor(private myLibraryService: MyLibraryService) {}
  ngOnInit(): void {
    this.toUpper = this.myLibraryService.firstLetterToUpper('test');
  }
}
