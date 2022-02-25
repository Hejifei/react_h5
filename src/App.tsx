import {Translation} from 'react-i18next'
import {Routes, Route, Link} from "react-router-dom";
import React, {useState, useCallback} from 'react'
import i18n from './react-i18next-config'
import {useDispatch, useSelector} from 'react-redux'
import {
  incremented,
  decremented,
} from '@/model/counter'
import styles from './index.module.less'

import { COUNTER_REDUCER_FEATURE_KEY } from './model/counter';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
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

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App
