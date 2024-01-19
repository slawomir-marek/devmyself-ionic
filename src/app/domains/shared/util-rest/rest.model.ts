import { HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

export interface HttpOptions {
  params?: HttpParams;
  headers?: HttpHeaders;
  responseType?: 'json';
}

export interface ResponseError {
  message: string;
  error: HttpErrorResponse | any;
}
