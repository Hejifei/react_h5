import {Translation} from 'react-i18next'
import {Link} from "react-router-dom";
import {useState, useCallback} from 'react'
import i18n from '../../react-i18next-config'
import {useDispatch, useSelector} from 'react-redux'
import {
  incremented,
  decremented,
} from '@/model/counter'
import styles from './index.module.scss'
import './index.css'

import { COUNTER_REDUCER_FEATURE_KEY } from '../../model/counter';

function App() {
  const [language, setLanguage] = useState(i18n.language)
  const changeLanguage = useCallback((value) => {
    setLanguage(value)
    i18n.changeLanguage(value)
  },[])

  return (
    <div className="App">
      <Translation>
        {(t) => <h3>{t("home.content")}</h3>}
      </Translation>
      <div>
        <label>语言切换</label>
        <select value={language} onChange={(e)=>changeLanguage(e.target.value)}>
            <option value="cn">中</option>
            <option value="en">英</option>
        </select>
      </div> 
      <div className={styles.contentWrapper} >
        <div className={styles.centerWrapper}></div>
      </div>
      <h1 className="flex text-3xl font-bold underline text-blue-600">
          Hello world!
      </h1>
      <div className='wrapper'>
        <div className='content'></div>
      </div>
      <div className='wrapper2'>
        <div className='content2'></div>
      </div>
      <Home />
    </div>
  );
}

function Home() {
  const dispatch = useDispatch();
  const counterState = useSelector((state: IStoreState) => state[COUNTER_REDUCER_FEATURE_KEY]);

  return (
    <>
      <main>
        {counterState.value}
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <div>
        <button onClick={() => dispatch(incremented())}>incremented</button> | 
        <button onClick={() => dispatch(decremented())}>decremented</button>
      </div>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

export default App
