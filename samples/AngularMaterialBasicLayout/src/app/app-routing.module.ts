import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DataComponent } from './pages/data/data.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'data', component: DataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
