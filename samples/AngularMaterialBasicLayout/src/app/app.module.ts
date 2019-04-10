import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatMenuModule, MatListModule, MatToolbarModule, MatSidenavModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DataComponent } from './pages/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
