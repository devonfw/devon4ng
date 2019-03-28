import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Devon4ngErrorHandler';

  constructor(private httpClient: HttpClient) {

  }
  ngOnInit() {
  }
  serverError() {
    this.httpClient.get('non existing url').subscribe();
  }
  clientError() {
    return varNotDeclared;
  }
}
