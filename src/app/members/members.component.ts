import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MembersService, Member } from './members.service';
import { TagService } from 'src/app/tag.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members$: Observable<Member[]>;
  constructor(public membersService: MembersService, private tagService: TagService) { }

  ngOnInit() {
    this.tagService.setPageTitle('Community-клуб Omerta | Члены клуба');
    this.tagService.setPageDescription('Список членов клуба "Omerta" и условия попадания в него.');
    this.tagService.setMetaRobots('index, follow');
    this.members$ = this.membersService.getMembers();
  }

}
