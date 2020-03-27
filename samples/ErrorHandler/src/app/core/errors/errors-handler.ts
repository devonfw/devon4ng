import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
  constructor(private injector: Injector) {}

  handleError(error: Error | HttpErrorResponse) {
    // Use injector to get the necessary services to redirect or
    const classname = error.constructor.name;
    switch (classname) {
      case 'HttpErrorResponse':
        console.error('HttpError:' + error.message);
        if (!navigator.onLine) {
          console.error('Theres no internet connection');
          // Control here in internet what you wanna do if user has no internet
        } else {
          console.error('Server Error:' + error.message);
          // Control here if the server gave an error
        }
        break;
      default:
        console.error('Error:' + error.message);
      // Control here if the client/other things gave an error
    }
  }
}
