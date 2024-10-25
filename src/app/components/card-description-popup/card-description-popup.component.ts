import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {ITodoCard} from '../../models/itodo-card';
import {MatIcon} from '@angular/material/icon';
import {EditCardPopupComponent} from '../edit-card-popup/edit-card-popup.component';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'card-description-popup',
  standalone: true,
  templateUrl: './card-description-popup.component.html',
  styleUrl: './card-description-popup.component.scss',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatIcon, EditCardPopupComponent, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CardDescriptionPopupComponent {
  readonly data = inject<ITodoCard>(MAT_DIALOG_DATA);
  edit_mod = true;

  toggleEdit() {
    this.edit_mod = !this.edit_mod;
  }
}

