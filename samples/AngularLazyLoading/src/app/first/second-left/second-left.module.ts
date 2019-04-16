import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondLeftRoutingModule } from './second-left-routing.module';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [ContentComponent],
  imports: [CommonModule, SecondLeftRoutingModule],
})
export class SecondLeftModule {}
