import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent, MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {ITodoCard} from '../../models/itodo-card';
import {MatIcon} from '@angular/material/icon';
import {EditCardPopupComponent} from '../edit-card-popup/edit-card-popup.component';
import {DatePipe, NgIf} from '@angular/common';
import {CardStatus} from '../../models/card-status';
import {TodoCardsDataService} from '../../data/todo-cards-data.service';

@Component({
  selector: 'card-description-popup',
  standalone: true,
  templateUrl: './card-description-popup.component.html',
  styleUrl: './card-description-popup.component.scss',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatIcon, EditCardPopupComponent, DatePipe, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CardDescriptionPopupComponent {
  readonly data = inject<ITodoCard>(MAT_DIALOG_DATA);
  currentUser = localStorage.getItem("username") || "default"
  todoCardsDataService = inject(TodoCardsDataService)
  edit_mod = true;

  constructor(private dialogRef: MatDialogRef<EditCardPopupComponent>) {}

  toggleEdit() {
    this.edit_mod = !this.edit_mod;
  }



  protected readonly CardStatus = CardStatus;
  protected readonly localStorage = localStorage;
}

