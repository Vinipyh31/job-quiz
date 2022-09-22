import { MutableRefObject, useEffect, useState } from 'react';
import '../../styles/Test.scss';
import { IJob, IQuestion } from '../../types/types';
import MyButton from '../UI/button/MyButton';

type quiz = {
    setEndTest: (flag: boolean) => void;
    setStartTest: (flag: boolean) => void;
    questions: IQuestion[];
    jobs: MutableRefObject<IJob[]>;
}

const Test = ({ setEndTest, questions, jobs, setStartTest }: quiz) => {

    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number>(0)

    useEffect(() => {
        if (questions[questionNumber].answerOptions.length - 1 < selectedAnswer) {
            setSelectedAnswer(0);
        }
    }, [questions[questionNumber].answerOptions.length])




    function buttonClick() {
        const answer = questions[questionNumber].answerOptions[selectedAnswer]
        const list = jobs
            .current
            .filter((job) => answer.incById.includes(job.id))
            .forEach((job) => { job.score = job.score + 1 });

        if (questionNumber === questions.length - 1) {
            setEndTest(true);
            setStartTest(false);
        } else {
            setQuestionNumber(questionNumber + 1);
        }
    }

    return (
        <div className='Test'>
            <h1 className="question-number">{`Вопрос ${questions[questionNumber].id}/10`}</h1>
            <h2 className="question">{questions[questionNumber].question}</h2>
            <div className={`answers ${questions[questionNumber].answerOptions.length < 5 ? "" : "big"}`}>
                {questions[questionNumber].answerOptions.map((answer, index) => {
                    return (
                        <div
                            className="answer"
                            key={index}
                        >
                            <input
                                checked={selectedAnswer === index ? true : false}
                                type="radio"
                                id={index.toString()}
                                name="answ"
                                value="1"
                                onChange={() => setSelectedAnswer(index)}
                            />
                            <label htmlFor={index.toString()}>{answer.value}</label>
                        </div>
                    )
                })}
            </div>
            <MyButton
                className="btn"
                type='small'
                onClick={buttonClick}
            >далее
            </MyButton>
        </div>
    )
}

export default Test