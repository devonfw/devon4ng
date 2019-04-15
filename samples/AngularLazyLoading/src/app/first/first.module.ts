import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './first/first.component';
import { SecondLeftModule } from './second-left/second-left.module';
import { SecondRightModule } from './second-right/second-right.module';

@NgModule({
  declarations: [FirstComponent],
  imports: [
    CommonModule,
    FirstRoutingModule,
    SecondLeftModule,
    SecondRightModule,
  ]
})
export class FirstModule { }
