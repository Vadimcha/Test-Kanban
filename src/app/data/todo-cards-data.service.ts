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
      title: "Make kanban desk",
      description: "You should create kanban desk using Angular",
      status: CardStatus.Done,
      creator: "Obelyashevsky Michail",
      worker: "Belo Vadim",
      date_creation: new Date("2024-10-19"),
      date_deadline: new Date("2024-10-27"),
      date_completion: new Date(),
    },
    {
      id: '1',
      title: "Learning angular Js",
      description: "Learn angular js",
      status: CardStatus.InProgress,
      creator: "Belov Vadim",
      worker: "Belov Vadim",
      date_creation: new Date("2024-10-21"),
      date_deadline: new Date("2025-2-6"),
      date_completion: new Date(),
    },
    {
      id: '2',
      title: "Get job",
      description: "You should get job to eat tasty food",
      status: CardStatus.ToDo,
      creator: "Belov Vadim",
      worker: "",
      date_creation: new Date("2024-10-21"),
      date_deadline: new Date("2050-1-1"),
      date_completion: new Date(),
    }
  ]);

  readonly todoCards$ = this.todoCardsSubject.asObservable();

  updateCard(updatedCard: ITodoCard): void {
    const updatedCards = this.todoCardsSubject.value.map((card) =>
      card.id === updatedCard.id ? { ...updatedCard } : card
    );
    this.todoCardsSubject.next(updatedCards);
  }

  refuseCard(data: ITodoCard) {
    this.updateCard({
      ...data,
      status: CardStatus.ToDo,
      worker: ""
    })
  }

  completeCard(data: ITodoCard) {
    this.updateCard({
      ...data,
      status: CardStatus.Done,
      worker: "",
      date_completion: new Date,
    })
  }

  takeCard(data: ITodoCard) {
    this.updateCard({
      ...data,
      status: CardStatus.InProgress,
      worker: localStorage.getItem("username") || "default",
    })
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
