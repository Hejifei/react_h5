import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import {DotLoading} from 'antd-mobile'
import store from './store'
import routes from "@/router";
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div className="bg-blue-50 min-h-screen"><DotLoading /></div>}>
          {routes}  
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
