import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    this.calcEventDate();
    if (sessionStorage.getItem("switchState") !== null) {
      this.switchState = sessionStorage.getItem("switchState") === 'true' ? true : false;
    }
    
  }

  private calcEventDate() {
    if (this.currentDate.getDay() !== 0) {
      this.eventDate[0] = this.currentDate.getDate() + (7 - this.currentDate.getDay());
      this.currentDate.setDate(this.eventDate[0]);
      this.eventDate[0] = this.currentDate.getDate();
    } else this.eventDate[0] = this.currentDate.getDate();
    this.eventDate[1] = this.months[this.currentDate.getMonth()].substr(0, 3);
  }
}
