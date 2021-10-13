import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button'
import './styles/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Button btnType={'danger'} size={'lg'} onClick={() => {
      console.log('hello')
    }}>阿牛</Button>
  </React.StrictMode>,
  document.getElementById('root')
);


