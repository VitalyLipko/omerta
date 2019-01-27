import { Injectable } from '@angular/core';
import { Members } from './members';
import { Observable, of } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class MembersService {
  members = Members;
  constructor() { }

  get(): Observable<string[]> {
    return of(this.members);
  }

  add(member: string) {
    this.members.push(member);
  }

  update(previousName: string, updateName: string) {
    this.members.splice(this.members.indexOf(previousName), 1, updateName);
  }

  delete(member: string) {
    this.members.splice(this.members.indexOf(member), 1);
  }
}