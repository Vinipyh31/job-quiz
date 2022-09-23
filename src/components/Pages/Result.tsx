import '../../styles/Result.scss';
import { IJob } from '../../types/types';
import MyButton from '../UI/button/MyButton';


type result = {

  jobs: IJob[];
}

const Result = ({ jobs }: result) => {
  return (
    <div className='Result'>
      <h2>Профессии, набравшие максимальное количество баллов <span className='blue'> становятся приоритетными к рекомендации</span>.</h2>
      <div className='jobs__container'>
        {jobs.sort((a, b) => b.score - a.score).map(job => {
          return (
            <div className='job' key={job.id}>
              <div className='title'><span className='score'>{job.score} баллов — </span>{job.name}</div>
              <div className='description'><p>{job.description}</p></div>
              <MyButton
                className='btn'
                type='small'
                onClick={() => { window.open(job.more); }}
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