import { NgModule, Injector } from '@angular/core';

import { CoreModule } from './core.module';
import { createCustomElement } from '@angular/elements';
import { DishviewComponent } from './dish/dishview/dishview.component';
import { DishFormComponent } from './dish/dish-form/dish-form.component';
import { DishShareService } from './dish/shared/dish-share.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DishFormComponent,
    DishviewComponent
  ],
  imports: [
    CoreModule,  // Module containing Angular Materials
    FormsModule
  ],
  entryComponents: [
    DishFormComponent,
    DishviewComponent
  ],
  providers: [DishShareService]
})
export class AppModule {
  constructor(private injector: Injector) {

  }

  ngDoBootstrap() {
    const el = createCustomElement(DishFormComponent, {injector: this.injector});
    customElements.define('dish-form', el);

    const elView = createCustomElement(DishviewComponent, {injector: this.injector});
    customElements.define('dish-view', elView);
  }
}
