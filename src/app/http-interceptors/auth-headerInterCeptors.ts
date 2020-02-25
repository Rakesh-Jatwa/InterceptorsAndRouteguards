import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from "@angular/common/http";
import { throwError } from 'rxjs';
@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log("hello intercepter works..");
        const token = "awuadbsdfsdohfspofjweejwefpwehwehfkwehfkwejf--rakesh";
        const request = req.clone({
            setHeaders: { Authorization: token }

        });
        return next.handle(request);
    }
}  