import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import NoteDeck from './components/NoteDeck';

const App = () => {
  return (
    <>
      < NoteDeck />
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
