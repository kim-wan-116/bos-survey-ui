import { Component, OnInit } from '@angular/core';
import { Question } from '@app/shared/models/question.model';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  question: Question;

  constructor(
    public dialogRef: MatDialogRef<QuestionFormComponent>,

  ) { }

  ngOnInit() {
    // Initial Question
    this.question = {
      prompt: '',
      options: [
        { id: 1, description: '' },
        { id: 2, description: '' }
      ]
    }
  }

  onFormSubmit() {
    this.dialogRef.close(this.question)
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }



}
