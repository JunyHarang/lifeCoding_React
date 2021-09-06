import React, { Component } from 'react';
import Nav from "./component/Nav";
import Content from "./component/Content";
import Subject from "./component/Subject";
import './App.css';

class App extends Component { // App Class

    constructor(props) {
        // State 값을 초기화 시키기 위함이고, 그 초기값으로 'title="WEB" sub="word wide web!"'을 설정하려 한다.
        super(props);
        this.state = {
            subject:{title:'Web', sub:'World Wide Web!'}
        }
    } // constructor() 끝
    // App Class는 rander라는 Method를 가지고 있다.
    // props는 Tag안에 title, sub, desc와 같은 것들을 얘기한다.
  render() {
        return (
            <div className="App">
                {/* State화 하기 전 코드 */}
                {/*<Subject title="WEB" sub="word wide web!"></Subject>*/}

                {/*State화 한 뒤 코드*/}
                <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
                <Nav></Nav>
                <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
            </div>
        );
    }
}


export default App;
