import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAgZAHNnO7Ua5V-cP2Tz2D4w1vekCCAj58',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError((errorRes) => this.handleError(errorRes)));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAgZAHNnO7Ua5V-cP2Tz2D4w1vekCCAj58',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError((errorRes) => this.handleError(errorRes)));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMsg = 'An unknown errror ocuurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMsg);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMsg = 'This email already exists!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMsg = 'This email does not exists!';
        break;
      case 'INVALID_PASSWORD':
        errorMsg = 'The password is incorrect!';
        break;
      default:
        errorMsg = 'An unknown errror ocuurred!';
        break;
    }
    return throwError(errorMsg);
  }
}
