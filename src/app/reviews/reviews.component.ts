import { Component, OnInit } from '@angular/core';

import { TagService } from 'src/app/tag.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: [string, string][] = [
    ['review1', 'Александра Бобошко'],
    ['review2', 'Александр Крапива'],
    ['review3', 'Оля Сайдашева'],
    ['review4', 'Виктория Бянкина'],
    ['review5', 'Алексей Лебедев'],
  ];
  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.tagService.setPageTitle('Community-клуб Omerta | Отзывы');
    this.tagService.setPageDescription('Впечатления игроков от наших мероприятий.');
    this.tagService.setMetaRobots('index, follow');
  }

}
