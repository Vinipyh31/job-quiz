import React, { MutableRefObject } from 'react'
import { IJob, IQuestion } from '../../types/types';
import '../../styles/Result.scss';
import MyButton from '../UI/button/MyButton';


type result = {

  jobs: MutableRefObject<IJob[]>;
}

const Result = ({ jobs }: result) => {
  console.log(jobs);

  return (
    <div className='Result'>
      <h2>Профессии, набравшие максимальное количество баллов <span className='blue'> становятся приоритетными к рекомендации</span>.</h2>
      <div className='jobs__container'>
        {jobs.current.sort((a, b) => b.score - a.score).map(job => {
          return (
            <div className='job' key={job.id}>
              <div className='title'><span className='score'>{job.score} баллов — </span>{job.name}</div>
              <div className='description'><p>{job.description}</p></div>
              <MyButton
                className='btn'
                type='small'
              >подробнее</MyButton>
            </div>
          )
        })
        }
      </div>
    </div >
  )
}

export default Result