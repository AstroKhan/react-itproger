import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import './css/main.css';

  
  class App extends React.Component {
     
    render() {
    return ( <div>
    <Header title='Хедер' />
    <main><Users /></main>
    <aside></aside>
  </div>)
  }
  }

  export default App;