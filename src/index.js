import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

const inputClick = () => console.log('Clicked');
const mouseOver = () => console.log('Mouse over');

const helpText = 'Help text';

const Header = () => {
  return (
    <header>Шапка сайта</header>
  )
}

function App() {
  return ( <div className='name'>
  <Header />
  <h1>{helpText}</h1>
  <input placeholder={helpText}
  onClick={inputClick} onMouseEnter={mouseOver} />
  <p>{helpText === 'Help text!' ? 'Yes' : 'No'}</p>
</div>)
}

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
  <App />
);
