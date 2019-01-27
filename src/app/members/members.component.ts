import { Component, OnInit } from '@angular/core';
import { MembersService } from './members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: string[];
  constructor(public membersService: MembersService) { }

  ngOnInit() {
    this.membersService.get().subscribe(members => this.members = members);
  }

}
