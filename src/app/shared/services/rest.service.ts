import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

import { HttpOptions, ResponseError } from './rest.model';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.API_URL;
  }

  get<T>(url: string, options?: HttpOptions): Observable<T> {
    const endpoint = this.apiUrl + url;

    return this.httpClient.get<T>(endpoint, options).pipe(
      catchError((error: HttpErrorResponse) => {
        return this.handleError(error);
      })
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const internalError = {
      message: error.message,
      error,
    };

    this.logError(internalError);
    return throwError(internalError);
  }

  private logError(error: ResponseError): void {
    // TODO: place for log http errors into AI
  }
}
