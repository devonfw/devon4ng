import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondRightRoutingModule } from './second-right-routing.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    SecondRightRoutingModule
  ]
})
export class SecondRightModule { }
