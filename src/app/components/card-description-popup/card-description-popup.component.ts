import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {ITodoCard} from '../../models/itodo-card';

@Component({
  selector: 'card-description-popup',
  standalone: true,
  templateUrl: './card-description-popup.component.html',
  styleUrl: './card-description-popup.component.scss',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDescriptionPopupComponent {
  @Input() data!: ITodoCard;
}

