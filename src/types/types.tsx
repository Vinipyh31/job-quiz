interface IAnswer {
    value: string;
    rateID: number;
    incById: number[];
}

export interface IQuestion {
    id: number;
    question: string;
    type: string;
    answerOptions: IAnswer[];
}

export interface IJob {
    id: number;
    name: string;
    description: string;
    score: number;
}