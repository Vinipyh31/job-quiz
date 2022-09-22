import React from 'react';
import '../../styles/Hello.scss';
import arm from '../../images/Saly.png';
import MyButton from '../UI/button/MyButton';

type hello = {
  setStartTest: (flag:boolean) => void;
}

const Hello = ({ setStartTest }: hello) => {
  return (
    <div className='Hello'>
      <img src={arm} />
      <div className='Hello__container'>
        <h1 className='blue'>Привет!</h1>
      </div>
      <div className="main__container">
        <p>Мы создали специальный психологический тест,
          на основе которого вы сможете выбрать именно ту профессию, которая близка вам по ценностям, характеру деятельности и вашим личным способностям.
        </p>
        <MyButton type='big' onClick={() => {setStartTest(true)}}>начать тест</MyButton>
        <p className='blue description'>А по итогу прохождения, вы получите ссылки
          на программы с бесплатным обучением!</p>
      </div>
    </div>
  )
}

export default Hello