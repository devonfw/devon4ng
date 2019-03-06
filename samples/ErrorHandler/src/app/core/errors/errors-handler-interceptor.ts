import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { retryWhen, delay, take, concatMap } from 'rxjs/operators';

@Injectable()
export class ErrorsHandlerInterceptor implements HttpInterceptor {

    constructor() {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            retryWhen((errors: Observable<any>) => errors.pipe(
                delay(500),
                take(5),
                concatMap((error: any, retryIndex: number) => {
                    if (++retryIndex === 5) {
                        throw error;
                    }
                    return of(error);
                })
            ))
        );
    }
}
