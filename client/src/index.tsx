import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux/store'
import MovieAction from './redux/actions/MovieAction';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(MovieAction.setLoadingAction(true))

store.dispatch(MovieAction.setConditionAction({
  page: 2,
  limit: 2,
  key: 'yang'
}))
