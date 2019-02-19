import { Component, OnInit } from '@angular/core';

import { TagService } from 'src/app/tag.service';

@Component({
  selector: 'app-omerta',
  templateUrl: './omerta.component.html',
  styleUrls: ['./omerta.component.css']
})
export class OmertaComponent implements OnInit {

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.tagService.setPageTitle('Community-клуб Omerta | Еженедельные игры в "Мафию". Авторские ролевые игры. Авторские тренинговые игры и ивенты.');
    this.tagService.setPageDescription('Список членов клуба "Omerta" и условия попадания в него.');
    this.tagService.setMetaRobots('index, follow');
  }

}
