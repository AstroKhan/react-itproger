import React from "react";
import Header from "./components/Header";
import './css/main.css';
import Image from "./components/Image";
import corndog from "./img/Corn-dog.png"

  
  class App extends React.Component {
    helpText = 'Help text';
    render() {
    return ( <div className='name'>
    <Header title='Хедер' />
    <Header title='Хедер 2' />
    <Header title='Хедер 3' />
    <h1>{this.helpText}</h1>
    <input placeholder={this.helpText}
    onClick={this.inputClick} onMouseEnter={this.mouseOver} />
    <p>{this.helpText === 'Help text!' ? 'Yes' : 'No'}</p>
    <Image image={corndog} />
    <img src={corndog} />
  </div>)
  }
  inputClick() {console.log('Clicked')};
  mouseOver() {console.log('Mouse over')};
  }

  export default App;