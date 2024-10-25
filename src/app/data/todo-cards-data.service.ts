import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITodoCard } from '../models/itodo-card';
import { CardStatus } from '../models/card-status';

@Injectable({
  providedIn: 'root',
})
export class TodoCardsDataService {
  private todoCardsSubject = new BehaviorSubject<ITodoCard[]>([
    {
      id: '0',
      title: "Make",
      description: "You sho",
      status: CardStatus.ToDo,
      creator: "Obelyashevsky Michail",
      worker: "Belov Vadim",
      date_creation: new Date("2024-10-21"),
      date_deadline: new Date("2024-10-26")
    },
    {
      id: '1',
      title: "Make test task",
      description: "You should create kanban desk using Angular",
      status: CardStatus.InProgress,
      creator: "Obelyashevsky Michail",
      worker: "Belov Vadim",
      date_creation: new Date("2024-10-21"),
      date_deadline: new Date("2024-10-26")
    },
    {
      id: '2',
      title: "Make test task",
      description: "You should create kanban desk using Angular",
      status: CardStatus.Done,
      creator: "Obelyashevsky Michail",
      worker: "Belov Vadim",
      date_creation: new Date("2024-10-21"),
      date_deadline: new Date("2024-10-26")
    }
  ]);

  readonly todoCards$ = this.todoCardsSubject.asObservable();

  updateCard(updatedCard: ITodoCard): void {
    const updatedCards = this.todoCardsSubject.value.map((card) =>
      card.id === updatedCard.id ? { ...updatedCard } : card
    );
    this.todoCardsSubject.next(updatedCards);
  }

  deleteCard(id: string): void {
    const updatedCards = this.todoCardsSubject.value.filter((card) =>
      card.id !== id
    )
    this.todoCardsSubject.next(updatedCards)
  }

  addCard(card: ITodoCard): void {
    this.todoCardsSubject.next([...this.todoCardsSubject.value, card])
  }
}
