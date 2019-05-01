import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

export interface Resident {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResidentsService {
  private url = 'api/residents';
  constructor(private http: HttpClient) { }

  getResidents(): Observable<Resident[]> {
    return this.http.get<Resident[]>(this.url).pipe(retry(3), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(`Server returned code ${error.status} ` + `body was: ${error.error}`);
    }
    return throwError(error);
  }
}
