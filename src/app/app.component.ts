import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetQuestions } from './shared/store/question/question.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'benefits-outsourcing-solutions';
  constructor(private store: Store) {
    this.store.dispatch(new GetQuestions());

  }
}
