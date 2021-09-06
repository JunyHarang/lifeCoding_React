import React, { Component } from 'react';
import Nav from "./component/Nav";
import Content from "./component/Content";
import Subject from "./component/Subject";
import './App.css';

class App extends Component { // App Class
    // App Class는 rander라는 Method를 가지고 있다.
    // props는 Tag안에 title, sub, desc와 같은 것들을 얘기한다.
  render() {
        return (
            <div className="App">
                <Subject title="WEB" sub="word wide web!"></Subject>
                <Subject title="React" sub="For UI"></Subject>
                <Nav></Nav>
                <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
            </div>
        );
    }
}



export default App;
