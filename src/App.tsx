import { useEffect, useRef, useState } from 'react';
import './App.scss';
import Hello from './components/Pages/Hello';
import Result from './components/Pages/Result';
import Test from './components/Pages/Test';
import { IJob, IQuestion } from './types/types'

function App() {

  const [startTest, setStartTest] = useState(false);
  const [endTest, setEndTest] = useState(false);
  const [questions, setQuestions] = useState<IQuestion[]>();
  //const [jobs, setJobs] = useState<IJob[]>()
  const jobs = useRef<IJob[]>([])

  async function getQuestions() {
    return await fetch('https://63201ebfe3bdd81d8ef2e42a.mockapi.io/questions/questions').then(req => req.json()).then(res => { setQuestions(res) });
  }

  async function getJobs() {
    return await fetch('https://63201ebfe3bdd81d8ef2e42a.mockapi.io/questions/jobs').then(req => req.json()).then(res => { jobs.current = res });
  }


  useEffect(() => {
    getQuestions();
    getJobs();
  }, [])


  return (
    <div className={`App ${endTest && !startTest ? 'result' : ''}`}>
      <div className={`quiz ${endTest && !startTest ? 'result': ''}`}>
        {!startTest && !endTest && <Hello setStartTest={setStartTest} />}
        {startTest && !endTest &&
          <Test
            setEndTest={setEndTest}
            setStartTest={setStartTest}
            questions={questions ? questions : []}
            jobs={jobs}
          />}
        {endTest && !startTest && (<Result jobs={jobs} />)}
      </div>
    </div>
  );
}

export default App;
