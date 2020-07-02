import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { LoaderService} from './loader.service';
import {tap} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(public loaderService: LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.loaderService.show();

    return next.handle(req).pipe(tap(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log(event);
          this.loaderService.hide();
        }
      },
    ));
  }
}
