import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UploaderComponent } from './uploader/uploader.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, UploaderComponent],
  imports: [
    CoreModule, // Module containing Angular Materials
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
