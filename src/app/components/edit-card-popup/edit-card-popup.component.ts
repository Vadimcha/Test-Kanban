import {Component, inject, Input} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MatDialogModule,
  MatDialogRef
} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";
import {ITodoCard} from '../../models/itodo-card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMomentDateModule, provideMomentDateAdapter} from '@angular/material-moment-adapter';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CardStatus} from '../../models/card-status';
import {TodoCardsDataService} from '../../data/todo-cards-data.service';

@Component({
  selector: 'edit-card-popup',
  standalone: true,
  imports: [
    MatButton,
    MatDialogTitle,
    MatIcon,
    MatIconButton,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatRadioGroup,
    MatRadioButton,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    provideMomentDateAdapter(),
  ],
  templateUrl: './edit-card-popup.component.html',
  styleUrl: './edit-card-popup.component.scss'
})
export class EditCardPopupComponent {
  @Input() data!: ITodoCard;
  public readonly minDate: Date;
  public form!: FormGroup;
  private readonly todoCardsDataService = inject(TodoCardsDataService)

  constructor(private dialogRef: MatDialogRef<EditCardPopupComponent>) {
    this.minDate = new Date();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      "title": new FormControl<string>(this.data.title),
      "description": new FormControl<string>(this.data.description),
      "date_deadline": new FormControl<Date>(this.data.date_deadline),
      // "status": new FormControl<CardStatus>(this.data.status),
    });
  }

  onSave(): void {
    if (this.form.valid) {
      const updatedCard: ITodoCard = {
        ...this.data,
        ...this.form.value
      };
      this.todoCardsDataService.updateCard(updatedCard);
    }
    this.dialogRef.close();
  }
}
