import { Component, OnInit } from '@angular/core';

import { TagService } from 'src/app/tag.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  private currentDate = new Date();
  eventDate: number;
  switchState: boolean = true;
  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.tagService.setPageTitle('Community-клуб Omerta | Ближайшие события');
    this.tagService.setPageDescription('Список мероприятий, которые можно посетить.');
    this.tagService.setMetaRobots('index, follow');
    if (sessionStorage.getItem("switchState") !== null) {
      this.switchState = sessionStorage.getItem("switchState") === 'true' ? true : false;
    }
    if (this.switchState) this.calcEventDate();
  }

  private calcEventDate() {
    if (this.currentDate.getDay() !== 0) {
      this.eventDate = this.currentDate.getTime() + (7 - this.currentDate.getDay()) * 24 * 60 * 60 * 1000;
    } else this.eventDate = this.currentDate.valueOf();
  }

  selectImg(day: number): number {
    day = Math.round(day / 7);
    if (day) return day;
    return 1;
  }
}
