import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TagService } from 'src/app/tag.service';
import { ResidentsService, Resident } from './residents.service';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent implements OnInit {
  residents$: Observable<Resident[]>;
  constructor(private tagService: TagService, private residents: ResidentsService) { }

  ngOnInit() {
    this.tagService.setPageTitle('Community-клуб Omerta | Резиденты клуба');
    this.tagService.setPageDescription('Список резидентов клуба и информация о том, кто это.');
    this.tagService.setMetaRobots('index, follow');
    this.residents$ = this.residents.getResidents();
  }

}
