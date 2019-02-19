import { Component, OnInit } from '@angular/core';

import { TagService } from 'src/app/tag.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.tagService.setPageTitle('Community-клуб Omerta | Страница не найдена');
    this.tagService.setPageDescription('');
    this.tagService.setMetaRobots('index, follow');
  }

}
