import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap } from 'rxjs/operators';
import { Question } from '@app/shared/models/question.model';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {
    readonly backendApi: string = 'https://api.com/';

    readonly fakeGetQuestionsResponse = {
        "data": [
            {
                "questionId": 1,
                "question": "What is your favorite color?",
                "options": [
                    {
                        "optionId": 1,
                        "optionDescription": "Red"
                    },
                    {
                        "optionId": 2,
                        "optionDescription": "Blue"
                    }
                ]
            },
            {
                "questionId": 2,
                "question": "What is your favorite food?",
                "options": [
                    {
                        "optionId": 1,
                        "optionDescription": "Steak"
                    },
                    {
                        "optionId": 2,
                        "optionDescription": "Potatoes"
                    }
                ]
            }
        ],
        "elapsedTimeMillis": 23,
        "page": 0,
        "size": 10,
        "totalItems": 2,
        "totalPages": 1
    }

    readonly fakeGetQuestionsWithAnswersResponse = {
        "data": [
            {
                "questionId": 1,
                "question": "What is your favorite color?",
                "options": [
                    {
                        "optionId": 1,
                        "optionDescription": "Red"
                    },
                    {
                        "optionId": 2,
                        "optionDescription": "Blue"
                    }
                ],
                "surveyResponses": {
                    "1": 25,
                    "2": 92
                }
            },
            {
                "questionId": 2,
                "question": "What is your favorite food?",
                "options": [
                    {
                        "optionId": 1,
                        "optionDescription": "Steak"
                    },
                    {
                        "optionId": 2,
                        "optionDescription": "Potatoes"
                    }
                ],
                "surveyResponses": {
                    "1": 0,
                    "2": 0
                }
            }
        ],
        "elapsedTimeMillis": 23,
        "page": 0,
        "size": 10,
        "totalItems": 2,
        "totalPages": 1
    }

    constructor(private httpClient: HttpClient) { }

    getQuestions() {
        // return this.httpClient.get<any>(`${this.backendApi}/survey-questions`);
        return of(this.fakeGetQuestionsResponse);
    }

    getQuestion(questionId: number) {
        // return this.httpClient.get<any>(`${this.backendApi}/survey-question/${questionId}`);
        // console.log("fakeQuestion:", this.fakeGetQuestionsWithAnswersResponse.data)
        return of(this.fakeGetQuestionsWithAnswersResponse.data.filter( question => question.questionId === questionId));
    }

    answerQuestion(user: string, questionId: number, optionId: number) {
        let answer = {
            surveyUser: user,
            questionId: questionId,
            selectedOptionId: optionId
        }

        let fakeAnswer = {
            respondId: 115,
            surveyUser: user,
            questionId,
            optionId
        }
        return of(fakeAnswer)
        // return this.httpClient.post<any>(`${this.backendApi}/survey-responses`, answer);
    }

    createQuestion(question: Question){
        // return this.httpClient.post<any>(`${this.backendApi}/survey-questions`, question);
        return of({
            id: Math.floor(Math.random()*100000),
            ...question
        })
    }
}