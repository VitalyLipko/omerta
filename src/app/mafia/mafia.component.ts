import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mafia',
  templateUrl: './mafia.component.html',
  styleUrls: ['./mafia.component.css']
})
export class MafiaComponent implements OnInit {

  cards: string[] = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9"];
  constructor() { }

  ngOnInit() {
  }

}
