import { Injectable } from '@angular/core';

import { Resident } from './residents/residents.service';
import { Member } from './members/members.service';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    let members = [
      { id: 1, name: 'Вадим Мягков' },
      { id: 2, name: 'Сергей Семиколенов' },
      { id: 3, name: 'Оля Сайдашева' },
      { id: 4, name: 'Чарльз' },
      { id: 5, name: 'Александра Бобошко' },
      { id: 6, name: 'Оля Овчинникова' },
      { id: 7, name: 'Павел Фролов' },
      { id: 8, name: 'Игорь Бородастов' },
      { id: 9, name: 'Александр Макаров' },
      { id: 10, name: 'Людмила Вершинина' },
      { id: 11, name: 'Катерина Приходько' },
      { id: 12, name: 'Георгий Борисов' },
      { id: 13, name: 'Евгений Калинкин' },
      { id: 14, name: 'Артем Ситников' },
      { id: 15, name: 'Наташа Ларина' },
      { id: 16, name: 'Алексей Лебедев' },
      { id: 17, name: 'Александр Крапива' },
      { id: 18, name: 'Александр Колдун' },
      { id: 19, name: 'Алена Чурилина' },
      { id: 20, name: 'Алина Терехова' },
      { id: 21, name: 'Георгий Пинаев' },
      { id: 22, name: 'Анастасия Адиятулина' },
      { id: 23, name: 'Татьяна Рамзина' },
      { id: 24, name: 'Екатерина Шангина' },
      { id: 25, name: 'Ирина Чурилина' },
      { id: 26, name: 'Владимир Зонов' },
      { id: 27, name: 'Юлия Иванова' },
      { id: 28, name: 'Виктория Бянкина' },
      { id: 29, name: 'Артем Котиков' },
      { id: 30, name: 'Дарья Илюшникова' },
      { id: 31, name: 'Наталья Филинкова' },
      { id: 32, name: 'Маргарита Спиридонова' },
      { id: 33, name: 'Геннадий Буров' },
      { id: 34, name: 'Валентина Диннер' },
      { id: 35, name: 'Пауль' },
      { id: 36, name: 'Михаил Бакотин' }
    ];

    let residents = [
      { id: 1, name: "Григорий Семенов" },
      { id: 2, name: "Анастасия Заварзина" },
      { id: 3, name: "Виталий Мочалов" },
      { id: 4, name: "Дмитрий Филиппов" },
      { id: 5, name: "Ольга Загривина" },
      { id: 6, name: "Константин Плехотко" },
      { id: 7, name: "Анастасия Сергеева" }
    ];

    return { members, residents };
  }

  genId<T extends Resident | Member>(table: T[]): number {
    return table.length > 0 ? Math.max(...table.map(t => t.id)) + 1 : 1;
  }
}
