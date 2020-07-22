import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebviewDirective } from './shared/electron/webview.directive';
import { ElectronService } from './shared/electron/electron.service';

@NgModule({
  declarations: [
    AppComponent,
    WebviewDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
