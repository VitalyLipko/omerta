import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';


export interface Member {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private url = 'api/members';

  constructor(private http: HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.url).pipe(retry(3), catchError(this.handleError));
  }

  addMember(member: Member): Observable<Member> {
    return this.http.post<Member>(this.url, member).pipe(retry(3), catchError(this.handleError));
  }

  updateMember(member: Member): Observable<Member> {
    return this.http.put<Member>(this.url, member).pipe(retry(3), catchError(this.handleError));
  }

  deleteMember(member: Member): Observable<Member> {
    let urlId = `${this.url}/${member.id}`;
    return this.http.delete<Member>(urlId).pipe(retry(3), catchError(this.handleError));
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