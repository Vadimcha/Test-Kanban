import {Component, inject, Input} from '@angular/core';
import {ITodoCard} from '../../models/itodo-card';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {CardDescriptionPopupComponent} from '../card-description-popup/card-description-popup.component';
import {DatePipe, NgIf} from '@angular/common';
import {TodoCardsDataService} from '../../data/todo-cards-data.service';
import {MatIcon} from '@angular/material/icon';
import {CardStatus} from '../../models/card-status';

@Component({
  selector: 'todo-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, DatePipe, MatIcon, NgIf],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {
  @Input() data!: ITodoCard;
  readonly dialog = inject(MatDialog);
  todoCardsDataService = inject(TodoCardsDataService)

  openDescription() {
    this.dialog.open(CardDescriptionPopupComponent, {
      data: this.data,
    });
  }
  deleteCard() {
    this.todoCardsDataService.deleteCard(this.data.id)
  }

  protected readonly CardStatus = CardStatus;
}
