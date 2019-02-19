import { Component, OnInit } from '@angular/core';

import { TagService } from 'src/app/tag.service';

interface Resident {
  id: number;
  name: string;
}

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent implements OnInit {

  residents: Resident[] = [
    {id: 0, name: "Григорий Семенов"},
    {id: 1, name: "Анастасия Заварзина"},
    {id: 2, name: "Виталий Мочалов"},
    {id: 3, name: "Дмитрий Филиппов"},
    {id: 4, name: "Ольга Загривина"},
    {id: 5, name: "Константин Плехотко"},
    {id: 6, name: "Анастасия Сергеева"}
  ];

  constructor(private tagService: TagService) { }

  ngOnInit() {
    this.tagService.setPageTitle('Community-клуб Omerta | Резиденты клуба');
    this.tagService.setPageDescription('Список резидентов клуба и информация о том, кто это.');
    this.tagService.setMetaRobots('index, follow');
  }

}
