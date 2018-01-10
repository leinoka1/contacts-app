import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

export class CaHttpInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Interceptor takes the token...');
    const token = this.getStoredToken();
    if (token) {
      const request = req.clone({
        setHeaders: {Authorization: token.token_type + ' ' + token.access_token}
      });
      return this.handleHttpRequest(request, next);
    } else {
     return this.handleHttpRequest(req, next);
    }
  }
  private handleHttpRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).catch((response: HttpErrorResponse) => {
      const errorMessage = {title: '', message: ''};
      console.log('Error Code: ', response.status);
      if (response.status === 401) {
        console.log('Username or password is not valid!');
      errorMessage.title = 'Unauthorized access!';
      errorMessage.message = 'Username or password is not valid!';
      }
      if (response.status === 0) {
        console.log('Backend is down...');
        errorMessage.title = 'Backend is down!';
        errorMessage.message = 'Try again later!';
       }
      if (response.status !== 0 && response.status !== 401) {
        console.log('Something went wrong...');
        // this.router.navigate(['/ca/login-error']);
        errorMessage.title = 'Unknown error!';
        errorMessage.message = 'Try again later!';
      }
      console.log ('just returning error message');
      return Observable.throw(errorMessage);
       });

  }
  private getStoredToken() {
    const token = localStorage.getItem( 'ca-token');
    return JSON.parse(token);
  }
}
