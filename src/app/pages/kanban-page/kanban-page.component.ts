import { Component, inject } from '@angular/core';
import { TodoCardsDataService } from '../../data/todo-cards-data.service';
import { ITodoCard } from '../../models/itodo-card';
import { CardStatus } from '../../models/card-status';
import { TodoCardComponent } from '../../components/todo-card/todo-card.component';
import {AsyncPipe, CommonModule} from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-kanban-page',
  standalone: true,
  imports: [TodoCardComponent, AsyncPipe, CommonModule],
  templateUrl: './kanban-page.component.html',
  styleUrls: ['./kanban-page.component.scss']
})
export class KanbanPageComponent {
  username: string = localStorage.getItem("username") || "default";

  trackByCardId(index: number, card: ITodoCard): string {
    return card.id;
  }

  todoCardsDataService = inject(TodoCardsDataService);
  toDoCardsData$: Observable<ITodoCard[]> = this.todoCardsDataService.todoCards$.pipe(
    map(cards => cards.filter(card => card.status === CardStatus.ToDo))
  );
  inProgressCardsData$: Observable<ITodoCard[]> = this.todoCardsDataService.todoCards$.pipe(
    map(cards => cards.filter(card => card.status === CardStatus.InProgress))
  );
  doneCardsData$: Observable<ITodoCard[]> = this.todoCardsDataService.todoCards$.pipe(
    map(cards => cards.filter(card => card.status === CardStatus.Done))
  );
}
