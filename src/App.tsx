import {useEffect, useState} from 'react';
import './App.scss';
import Hello from './components/Pages/Hello';
import Result from './components/Pages/Result';
import Quiz from './components/Pages/QuizPageProps';
import Loader from './components/UI/loader/Loader';
import {IJob, IQuestion} from './types/types';

function App() {

    const [startTest, setStartTest] = useState(false);
    const [endTest, setEndTest] = useState(false);
    const [questions, setQuestions] = useState<IQuestion[]>();
    const [isLoading, setIsLoading] = useState(true)
    const [jobs, setJobs] = useState<IJob[]>([])

    async function getData() {
        await fetch('https://63201ebfe3bdd81d8ef2e42a.mockapi.io/questions/questions').then(req => req.json()).then(res => {
            setQuestions(res)
        });
        await fetch('https://63201ebfe3bdd81d8ef2e42a.mockapi.io/questions/jobs').then(req => req.json()).then(res => {
            setJobs(res)
        });
        setIsLoading(false);
    }


    useEffect(() => {
        getData();
    }, [])


    return (
        <div className={`App ${endTest && !startTest ? 'result' : ''}`}>
            <div className={`quiz ${endTest && !startTest ? 'result' : ''}`}>
                {!startTest && !endTest &&
                    <Hello
                        setStartTest={setStartTest}
                    />}
                {startTest && !endTest &&
                    (
                        isLoading ?
                            <div style={{
                                height: "80px",
                                width: "80px",
                                margin: "0 auto",
                            }}>
                                <Loader/>
                            </div> :
                            <Quiz
                                setEndTest={setEndTest}
                                setStartTest={setStartTest}
                                questions={questions ? questions : []}
                                jobs={jobs}
                            />
                    )
                }
                {endTest && !startTest && (<Result jobs={jobs}/>)}
            </div>
        </div>
    );
}

export default App;
