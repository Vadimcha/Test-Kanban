import {Component, inject, Input} from '@angular/core';
import {ITodoCard} from '../../models/itodo-card';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {CardDescriptionPopupComponent} from '../card-description-popup/card-description-popup.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'todo-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {
  @Input() data!: ITodoCard;
  readonly dialog = inject(MatDialog);

  openDescription() {
    this.dialog.open(CardDescriptionPopupComponent);
  }
}
