import { Component, OnInit } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { DataService } from './data.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'basic-ng-pwa';
  update = false;
  dish: { name: string; description: string } = { name: '', description: '' };

  constructor(updates: SwUpdate, private data: DataService) {
    updates.versionUpdates
      .pipe(
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')
      )
      .subscribe((event) => {
        updates.activateUpdate().then(() => document.location.reload());
      });
  }

  ngOnInit() {
    this.data
      .getDishes()
      .subscribe(
        (dishToday: { dish: { name: string; description: string } }) => {
          this.dish = {
            name: dishToday.dish.name,
            description: dishToday.dish.description,
          };
        }
      );
  }
}
