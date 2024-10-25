import { Component, inject } from '@angular/core';
import { TodoCardsDataService } from '../../data/todo-cards-data.service';
import { ITodoCard } from '../../models/itodo-card';
import { CardStatus } from '../../models/card-status';
import { TodoCardComponent } from '../../components/todo-card/todo-card.component';
import {AsyncPipe, CommonModule} from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {MatButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {CardDescriptionPopupComponent} from '../../components/card-description-popup/card-description-popup.component';
import {MakeTaskPopupComponent} from '../../components/make-task-popup/make-task-popup.component';

@Component({
  selector: 'app-kanban-page',
  standalone: true,
  imports: [TodoCardComponent, AsyncPipe, CommonModule, MatButton],
  templateUrl: './kanban-page.component.html',
  styleUrls: ['./kanban-page.component.scss']
})
export class KanbanPageComponent {
  username: string = localStorage.getItem("username") || "default";
  readonly dialog = inject(MatDialog);

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

  trackByCardId(index: number, card: ITodoCard): string {
    return card.id;
  }

  openMakeTaskPopup() {
    this.dialog.open(MakeTaskPopupComponent);
  }
}
