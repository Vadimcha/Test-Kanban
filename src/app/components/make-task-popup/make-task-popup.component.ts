import {Component, inject, Input} from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatDialogModule, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
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
  selector: 'make-task-popup',
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
  templateUrl: './make-task-popup.component.html',
  styleUrl: './make-task-popup.component.scss'
})
export class MakeTaskPopupComponent {
  public readonly minDate: Date;
  public form!: FormGroup;
  private readonly todoCardsDataService = inject(TodoCardsDataService)

  constructor(private dialogRef: MatDialogRef<MakeTaskPopupComponent>) {
    this.minDate = new Date();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      "title": new FormControl<string>(""),
      "description": new FormControl<string>(""),
      "date_deadline": new FormControl<Date>(new Date),
      // "status": new FormControl<CardStatus>(CardStatus.ToDo),
    });
  }

  onSave(): void {
    if (this.form.valid) {
      const newCard: ITodoCard = {
        ...this.form.value,
        status: "To Do",
        date_creation: new Date,
        creator: localStorage.getItem('username')
      };
      this.todoCardsDataService.addCard(newCard);
    }
    this.dialogRef.close();
  }
}
