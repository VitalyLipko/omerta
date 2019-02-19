import { Component, OnInit, Input } from '@angular/core';
import { MembersService } from '../members/members.service';
import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { TagService } from 'src/app/tag.service';

function controlLength(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (String(control.value).length > 20) {
      return { 'controlLength': { value: control.value } }
    } else return null;
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  members: string[];
  nameAddingMember = new FormControl("", controlLength());
  updateMember = new FormControl("", controlLength());
  previousName: string = "";
  switchState: boolean = true;
  constructor(public membersService: MembersService, private tagService: TagService) { }

  ngOnInit() {
    this.tagService.setPageTitle('Community-клуб Omerta | Панель управления');
    this.tagService.setPageDescription('');
    this.tagService.setMetaRobots('noindex, nofollow');
    this.membersService.get().subscribe(members => this.members = members);
    if (sessionStorage.getItem("switchState") !== null) {
      this.switchState = sessionStorage.getItem("switchState") === 'true' ? true : false;
    }
  }

  addNewMember(member: string) {
    this.membersService.add(member);
    this.nameAddingMember.setValue("");
  }

  sendToModal(name: string) {
    this.previousName = name;
    this.updateMember.setValue(name);
  }

  checkState() {
    this.switchState=!this.switchState;
    sessionStorage.setItem("switchState", String(this.switchState));
  }
}
