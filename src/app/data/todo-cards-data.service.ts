import {Injectable} from '@angular/core';
import {ITodoCard} from '../models/itodo-card';
import {CardStatus} from '../models/card-status';

@Injectable({
  providedIn: 'root',
})
export class TodoCardsDataService {
  private todoCards: ITodoCard[] = [
    {
      id: '0',
      title: "Make test task",
      description: "You should create canban-desk using Angular JS",
      status: CardStatus.ToDo,
      creator: "Obelyashevsky Michail",
      worker: "Belov Vadim",
      date_creation: new Date("2024-10-21"),
      date_deadline: new Date("2024-10-26")
    }
  ];

  getCardsByStatus(status: CardStatus): ITodoCard[] {
    return this.todoCards.filter((item: ITodoCard) => item.status === status);
  }
}
