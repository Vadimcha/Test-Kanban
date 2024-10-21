import {Component, inject} from '@angular/core';
import {TodoCardsDataService} from '../../data/todo-cards-data.service';
import {ITodoCard} from '../../models/itodo-card';
import {CardStatus} from '../../models/card-status';
import {TodoCardComponent} from '../../components/todo-card/todo-card.component';

@Component({
  selector: 'app-kanban-page',
  standalone: true,
  imports: [TodoCardComponent],
  templateUrl: './kanban-page.component.html',
  styleUrl: './kanban-page.component.scss'
})

export class KanbanPageComponent {
  username: string = localStorage.getItem("username") || "default"
  todoCardsDataService = inject(TodoCardsDataService)
  toDoCardsData: ITodoCard[] = this.todoCardsDataService.getCardsByStatus(CardStatus.ToDo)
  inProgressCardsData: ITodoCard[] = this.todoCardsDataService.getCardsByStatus(CardStatus.InProgress)
  doneCardsData: ITodoCard[] = this.todoCardsDataService.getCardsByStatus(CardStatus.Done)
}
