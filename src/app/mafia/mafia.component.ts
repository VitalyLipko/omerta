import { Component, OnInit } from '@angular/core';

import { TagService } from 'src/app/tag.service';

@Component({
  selector: 'app-mafia',
  templateUrl: './mafia.component.html',
  styleUrls: ['./mafia.component.css']
})
export class MafiaComponent implements OnInit {

  cards: string[] = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9"];
  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.tagService.setPageTitle('Community-клуб Omerta | "Мафия"');
    this.tagService.setPageDescription('Правила игры.');
    this.tagService.setMetaRobots('index, follow');
  }

}
