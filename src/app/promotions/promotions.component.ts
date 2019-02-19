import { Component, OnInit } from '@angular/core';

import { TagService } from 'src/app/tag.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.tagService.setPageTitle('Community-клуб Omerta | Акции');
    this.tagService.setPageDescription('Приятные бонусы нашим участникам.');
    this.tagService.setMetaRobots('index, follow');
  }

}
