import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import NoteDeck from './components/NoteDeck';

const App = () => {
  return (
    <>
    <div style={{height: '100%'}}>
      < NoteDeck />
    </div>
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
