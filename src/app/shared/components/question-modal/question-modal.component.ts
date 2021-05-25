import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Question } from '@app/shared/models/question.model';

@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.scss']
})
export class QuestionModalComponent implements OnInit {

  selectedAnswer: string;


  constructor(
    public dialogRef: MatDialogRef<QuestionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Question
  ) { }

  ngOnInit() {
    console.log("This is my data:", this.data)
  }

  onSubmitClick(): void{
    this.dialogRef.close({
      id: this.data.id,
      answer: this.selectedAnswer
    })
  }

  onCancelClick(): void{
    this.dialogRef.close(this.data);
  }

}
