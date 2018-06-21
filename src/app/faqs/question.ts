export interface IQuestion {
    question: string;
    answer: string;
    type: QuestionType;
}

export interface IFaqTypeDescription {
    type: QuestionType;
    description: string;
}

export enum QuestionType {
    about = "about",
    technical = "technical",
    author = "author"
}

