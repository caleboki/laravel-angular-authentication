import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private Token: TokenService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const token = this.Token.get();
        if(token) {
            req = req.clone({
                setHeaders: { 
                    Authorization: `Bearer ${token}`
                }
            });

        }
        return next.handle(req);
    }
    
    
        
    


}