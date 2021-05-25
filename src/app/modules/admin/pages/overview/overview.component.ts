import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { UserState } from '@app/shared/store/user/user.state';
import { QuestionsState } from '@app/shared/store/question/question.state';
import { Observable } from 'rxjs';
import { Question } from '@app/shared/models/question.model';
import { User } from '../../../../shared/models/user.model';
import { GetQuestions, AddQuestion, GetQuestion } from '../../../../shared/store/question/question.actions';
import { MatDialog } from '@angular/material';
import { withLatestFrom } from 'rxjs/operators';
import { QuestionFormComponent } from '../../../../shared/components/question-form/question-form.component';
import { QuestionService } from '../../../../core/services/question.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  @Select(QuestionsState.getQuestions) questions$: Observable<Question[]>;
  @Select(UserState.getUser) user$: Observable<User>

  tableColumns: string[] = ['id', 'question', 'cta']
  constructor(private store: Store, private dialog: MatDialog, private questionService: QuestionService) { }

  ngOnInit() {
    // this.store.dispatch(new GetQuestions());

  }

  onCreateQuestionClick(question: Question) {
    const dialogRef = this.dialog.open(QuestionFormComponent, {
      width: '350px',
    });

    dialogRef.afterClosed().pipe(
      withLatestFrom(this.user$)
    ).subscribe(([res, user]: [Question, any]) => {
      console.log("Result:", res)
      // TODO: Submit the answer to this question
      // this.store.dispatch(new AnswerQuestion(user.name, res.id, res.answer))
      this.store.dispatch(new AddQuestion(res))
    })
  }

  onViewResponsesClick(event){
    console.log("here is the event:", event)
    this.questionService.getQuestion(event.id).subscribe( res => {
      // console.log('Res:',res[0].surveyResponses)
      alert(JSON.stringify(res[0].surveyResponses));
    })
  }



}
