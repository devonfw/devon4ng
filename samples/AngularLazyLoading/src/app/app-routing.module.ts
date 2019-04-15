import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first/first.component';
import { ContentComponent as ContentLeft} from './first/second-left/content/content.component';
import { ContentComponent as ContentRight} from './first/second-right/content/content.component';

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent
  },
  {
    path: 'first/second-left',
    component: ContentLeft
  },
  {
    path: 'first/second-right',
    component: ContentRight
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
