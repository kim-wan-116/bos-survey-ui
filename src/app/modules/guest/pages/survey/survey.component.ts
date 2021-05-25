import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Question } from '@app/shared/models/question.model';
import { QuestionsState } from '@app/shared/store/question/question.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetQuestions, AnswerQuestion } from '../../../../shared/store/question/question.actions';
import { QuestionModalComponent } from '../../../../shared/components/question-modal/question-modal.component';
import { UserState } from '@app/shared/store/user/user.state';
import { withLatestFrom } from 'rxjs/operators';
import { User } from '../../../../shared/models/user.model';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  @Select(QuestionsState.getQuestions) questions$: Observable<Question[]>;
  @Select(UserState.getUser) user$: Observable<User>

  tableColumns: string[] = ['id', 'question', 'cta']

  constructor(private store: Store, public dialog: MatDialog) { }

  ngOnInit() {
    // Get all questions

    // this.questions$.subscribe(questions => {
    //   console.log("Here are the questions:", questions);
    // })
  }

  onRowClick(question: Question) {
    const dialogRef = this.dialog.open(QuestionModalComponent, {
      width: '350px',
      data: { ...question }
    });

    dialogRef.afterClosed().pipe(
      withLatestFrom(this.user$)
    ).subscribe(([res, user]: [{ id: number, answer: number }, any]) => {
      console.log("Result:", res)
      // TODO: Submit the answer to this question
      this.store.dispatch(new AnswerQuestion(user.name, res.id, res.answer))
    })
  }

}
