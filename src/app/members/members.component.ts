import { Component, OnInit } from '@angular/core';
import { MembersService } from './members.service';

import { TagService } from 'src/app/tag.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: string[];
  constructor(public membersService: MembersService, private tagService: TagService) { }

  ngOnInit() {
    this.tagService.setPageTitle('Community-клуб Omerta | Члены клуба');
    this.tagService.setPageDescription('Список членов клуба "Omerta" и условия попадания в него.');
    this.tagService.setMetaRobots('index, follow');
    this.membersService.get().subscribe(members => this.members = members);
  }

}
