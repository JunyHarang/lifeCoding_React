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
            mode : 'read',

            selected_content_id : 2,

            subject:{title:'Web', sub:'World Wide Web!'},
            welcome : {title:'Welcome', desc : 'Hello, React!!!'},
            contents: [
                {id:1, title:'HTML', desc: 'HTML is for information'},
                {id:2, title:'CSS', desc: 'CSS is for design'},
                {id:3, title:'JavaScript', desc: 'JavaScript is for interative'}
            ]
        }
    } // constructor() 끝
    // App Class는 rander라는 Method를 가지고 있다.
    // props는 Tag안에 title, sub, desc와 같은 것들을 얘기한다.
  render() {

        console.log('App render start');

      var _title, _desc = null;

      if(this.state.mode === 'welcome') {   // state의 mode가 welcome 이면

          _title = this.state.welcome.title; // constructor에 welcome(16번째 줄)에 제목을 _title에 넣어라.
          _desc = this.state.welcome.desc;  // constructor에 welcome(16번째 줄)에 내용을 _desc에 넣어라.

      } else if(this.state.mode === 'read') { // 아니고, read라면

          var i = 0;

          while (i < this.state.contents.length) {  // contents의 길이가 i보다 클 때까지
              var data = this.state.contents[i];    // contents의 i번째 내용을 data에 담고

              if (data.id === this.state.selected_content_id) { // id가 위의 selected content id와 같다면
                  _title = data.title;  // 제목을 data 안에 담긴 title로 담고
                  _desc = data.desc;    // 내용을 data 안에 담긴 desc로 담는다.

                  break;
              }

              i = i + 1;
          }
      }

      console.log('render', this)

        return (
            <div className="App">
                {/* State화 하기 전 코드 */}
                {/*<Subject title="WEB" sub="word wide web!"></Subject>*/}

                {/*State화 한 뒤 코드*/}
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage = {function () {
                        this.setState({
                            mode:'welcome'
                        });
                    }.bind(this)}
                >
                </Subject>

                {/*<header>*/}
                {/*    <h1><a href ="/" onClick={function (e) {*/}
                {/*        // this.state.mode = 'welcome'*/}
                {/*        this.setState({*/}
                {/*            mode:'welcome'*/}
                {/*        });*/}
                {/*    }.bind(this)}>{this.state.subject.title}</a></h1>*/}
                {/*    {this.state.subject.sub}*/}
                {/*</header>*/}

                <Nav onChangePage={function (id) {
                        this.setState({
                            mode : 'read',
                            selected_content_id : Number(id)    // 문자열인 id를 정수로 형변환
                        });
                    }.bind(this)}
                    data = {this.state.contents}>
                </Nav>
                <Content title={_title} desc={_desc}> </Content>
            </div>
        );
    }
}


export default App;
