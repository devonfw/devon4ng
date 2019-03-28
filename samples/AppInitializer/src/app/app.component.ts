import { Component } from '@angular/core';
import { ConfigService } from './core/config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Devon4ngAppInitializer';

  constructor(public configService: ConfigService) { }
}
