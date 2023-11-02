// request.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { EcryptionDecrytionService } from 'src/app/services/global/ecryption-decrytion.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private encryptionService: EcryptionDecrytionService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.body) { // Ensure there is a request body to encrypt
      const encryptedRequest = request.clone({
        body: this.encryptionService.encrypt(JSON.stringify(request.body)),
      });
      return next.handle(encryptedRequest);
    }
    return next.handle(request);
  }

}
