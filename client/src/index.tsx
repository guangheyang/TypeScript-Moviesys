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


store.dispatch(MovieAction.fetchMovies({
  page: 2
})).then(() => {
  store.dispatch(MovieAction.deleteAction("619a4f3f255c06267a2e9eaf"))
})