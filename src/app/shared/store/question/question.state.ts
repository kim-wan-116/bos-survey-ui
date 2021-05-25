import { Action, Selector, State, StateContext } from '@ngxs/store';
import { GetQuestions, AnswerQuestion, AddQuestion, GetQuestion } from './question.actions';
import { Question } from '@app/shared/models/question.model';
import { QuestionService } from '../../../core/services/question.service';
import { map, tap } from 'rxjs/operators';

export class QuestionsStateModel {
    questions: Question[];
}

@State<QuestionsStateModel>({
    name: 'Questions',
    defaults: {
        questions: []
    }
})
export class QuestionsState {
    constructor(private questionService: QuestionService) { }

    @Selector()
    static getQuestions(state: QuestionsStateModel) {
        return state.questions;
    }

    @Action(GetQuestions)
    retrieveQuestions(context: StateContext<QuestionsStateModel>) {
        return this.questionService.getQuestions().pipe(
            map(res => {
                return res.data.map(({ questionId, question, options }) => {
                    return {
                        id: questionId,
                        prompt: question,
                        options: options.map(({ optionId, optionDescription }) => { return { id: optionId, description: optionDescription } })
                    }
                })
            }),
            tap(res => {
                context.patchState({ questions: res})
            })
        )
    }

    @Action(GetQuestion)
    retrieveQuestion(context: StateContext<QuestionsStateModel>, action: GetQuestion){
        return this.questionService.getQuestion(action.questionId).pipe(
            tap( res => {
                console.log("Res:", res)
            })
        )
    }

    @Action(AddQuestion)
    AddQuestion(context: StateContext<QuestionsStateModel>, action: AddQuestion){
        return this.questionService.createQuestion(action.question).pipe(
            tap( question => {
                const state = context.getState();
                context.patchState({
                    questions: [ ...state.questions, question]
                })
            })
        )
    }

    @Action(AnswerQuestion)
    answerQuestion(context: StateContext<QuestionsStateModel>, action: AnswerQuestion){
        return this.questionService.answerQuestion(action.user, action.questionId, action.optionId).subscribe( res => {
            console.log(res)
        })
    }

}