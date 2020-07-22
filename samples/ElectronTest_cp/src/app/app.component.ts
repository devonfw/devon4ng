import { Component } from '@angular/core';
import { ElectronService } from './shared/electron/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public electronService: ElectronService) {
    if (electronService.isElectron()) {
      // Do electron stuff
    } else {
      // Do other web stuff
    }
  }
  title = 'Devon4ngElectronTest';
}
