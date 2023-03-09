import React from "react";
import Header from "./components/Header";
import './css/main.css';
import Image from "./components/Image";
import corndog from "./img/Corn-dog.png"

  
  class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            helpText: 'Help text',
            userData: ""
        }
        this.inputClick = this.inputClick.bind(this)
    }
    
    render() {
    return ( <div className='name'>
    <Header title='Хедер' />
    <Header title='Хедер 2' />
    <Header title='Хедер 3' />
    <h1>{this.state.helpText}</h1>
    <h2>{this.state.userData}</h2>
    <input placeholder={this.state.helpText}
    onClick={this.inputClick} 
    onMouseEnter={this.mouseOver} 
    onChange={(event) => this.setState({userData: event.target.value})}
    />
    <p>{this.state.helpText === 'Help text!' ? 'Yes' : 'No'}</p>
    <Image image={corndog} />
    <img src={corndog} />
  </div>)
  }
  inputClick() {
    this.setState({ helpText: 'Changed'} )
    console.log('Clicked');
};
  mouseOver() {console.log('Mouse over')};
  }

  export default App;