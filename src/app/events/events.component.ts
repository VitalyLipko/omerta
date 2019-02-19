import { Component, OnInit } from '@angular/core';

import { TagService } from 'src/app/tag.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  private months: string[] = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август",
    "сентябрь", "октябрь", "ноябрь", "декабрь"];
  eventDate: [number, string] = [0, ""];
  private currentDate = new Date();
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
      this.eventDate[0] = this.currentDate.getDate() + (7 - this.currentDate.getDay());
      this.currentDate.setDate(this.eventDate[0]);
      this.eventDate[0] = this.currentDate.getDate();
    } else this.eventDate[0] = this.currentDate.getDate();
    this.eventDate[1] = this.months[this.currentDate.getMonth()].substr(0, 3);
  }

  selectImg(day: number): number {
    day = Math.round(day / 7);
    if (day) return day;
    else return 1;
  }
}
