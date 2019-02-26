import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsHandler } from './errors-handler';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorsHandlerInterceptor } from './errors-handler-interceptor';

@NgModule({
  declarations: [], // Declare here component if you want to use routing to error component
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorsHandlerInterceptor,
      multi: true,
    }
  ]
})
export class ErrorsHandlerModule { }
