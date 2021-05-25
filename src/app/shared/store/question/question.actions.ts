import { Question } from "@app/shared/models/question.model";

export class GetQuestions {
    static readonly type = '[Question] Get Questions';
    constructor() { }
}

export class GetQuestion {
    static readonly type = '[Question] Get Question';
    constructor(public questionId: number) { }
}

export class AddQuestion {
    static readonly type = '[Question] Add Question';
    constructor(public question: Question) { }
}

export class AnswerQuestion {
    static readonly type = '[Question] Answer Question';
    constructor(public user: string, public questionId: number, public optionId: number) { }
}