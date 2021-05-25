import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { QuestionModalComponent } from './components/question-modal/question-modal.component';
import { MatDialogModule, MatRadioModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { QuestionFormComponent } from './components/question-form/question-form.component';

@NgModule({
  declarations: [QuestionModalComponent, QuestionFormComponent],
  imports: [
    CommonModule, 
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatRadioModule,
    FormsModule
  ],
  exports: [
    CommonModule, 
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDialogModule,
    MatRadioModule,
    FormsModule
  ],
  entryComponents: [
    QuestionModalComponent,
    QuestionFormComponent
  ]
})
export class SharedModule { }