import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

import { MembersService, Member } from '../members/members.service';
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
export class DashboardComponent implements OnInit, OnDestroy {
  members: Member[];
  nameAddingMember = new FormControl('', controlLength());
  updateMember = new FormControl('', controlLength());
  previousName: string = '';
  switchState: boolean = true;
  private updatebleMember: Member;
  private subscriptions: Subscription = new Subscription();
  constructor(private membersService: MembersService, private tagService: TagService) { }

  ngOnInit() {
    this.tagService.setPageTitle('Community-клуб Omerta | Панель управления');
    this.tagService.setPageDescription('');
    this.tagService.setMetaRobots('noindex, nofollow');
    this.subscriptions.add(
      this.membersService.getMembers().subscribe(members => this.members = members)
    );
    if (sessionStorage.getItem('switchState') !== null) {
      this.switchState = sessionStorage.getItem('switchState') === 'true' ? true : false;
    }
  }

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  add(name: string) {
    name = name.trim();
    this.membersService.addMember({ name } as Member).subscribe(member => this.members.push(member));
    this.nameAddingMember.setValue('');
  }

  update(formData: FormControl) {
    this.updatebleMember.name = formData.value;
    this.membersService.updateMember(this.updatebleMember).subscribe();
  }

  delete(member: Member) {
    this.members = this.members.filter(current => current !== member);
    this.membersService.deleteMember(member).subscribe();
  }

  sendToModal(member: Member) {
    this.updatebleMember = member;
    this.updateMember.setValue(member.name);
  }

  checkState() {
    this.switchState = !this.switchState;
    sessionStorage.setItem('switchState', String(this.switchState));
  }
}
