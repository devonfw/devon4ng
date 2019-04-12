import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstModule } from './first/first.module';
import { SecondLeftModule } from './first/first/second-left/second-left.module';
import { SecondRightModule } from './first/first/second-right/second-right.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstModule,
    SecondLeftModule,
    SecondRightModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
