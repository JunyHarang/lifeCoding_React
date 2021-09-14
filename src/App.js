import React, { Component } from 'react';
import Nav from "./component/Nav";
import ReadContent from "./component/ReadContent";
import CreateContent from "./component/CreateContent";
import UpdateContent from "./component/UpdateContent";
import Subject from "./component/Subject";
import Control from "./component/Control";
import './App.css';



class App extends Component { // App Class

    constructor(props) {
        // State 값을 초기화 시키기 위함이고, 그 초기값으로 'title="WEB" sub="word wide web!"'을 설정하려 한다.
        super(props);

        this.max_content_id = 3;    // contents의 마지막 id 값과 같아야 한다.

        this.state = {
            mode : 'welcome',

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
  getReadContent(){
      var i = 0;

      while (i < this.state.contents.length) {  // contents의 길이가 i보다 클 때까지
          var data = this.state.contents[i];    // contents의 i번째 내용을 data에 담고

          if (data.id === this.state.selected_content_id) { // id가 위의 selected content id와 같다면
              // _title = data.title;  // 제목을 data 안에 담긴 title로 담고
              // _desc = data.desc;    // 내용을 data 안에 담긴 desc로 담는다.

              return data;

              break;
          }

          i = i + 1;
      }
  }

  getContent() {
      var _title, _desc, _article = null;

      if (this.state.mode === 'welcome') {   // state의 mode가 welcome 이면

          _title = this.state.welcome.title; // constructor에 welcome(16번째 줄)에 제목을 _title에 넣어라.
          _desc = this.state.welcome.desc;  // constructor에 welcome(16번째 줄)에 내용을 _desc에 넣어라.
          _article = <ReadContent title={_title} desc={_desc}></ReadContent>
      
        } else if (this.state.mode === 'read') { // 아니고, read라면

          var _content = this.getReadContent();
          _article = <ReadContent title={_content.title} desc={_content.desc}></
          ReadContent>

      } else if (this.state.mode === 'create') {
          _article = <CreateContent onSubmit={function (_title, _desc) {
              // 새로운 컨텐트 값을 추가한다 ( add Content to this.state.contents
              this.max_content_id = this.max_content_id + 1;
              // 아래 주석 코드는 contents라는 State의 원본 배열에 Data를 넣기 때문에 좋지 않다.
              // this.state.contents.push({id:this.max_content_id, title:_title, desc:_desc});
              var _contents = Array.from(this.state.contents);
              _contents.push({
                  id:this.max_content_id, title:_title, desc:_desc
              });
              this.setState({
                  contents:_contents,
                  mode:'read',
                  selected_content_id:this.max_content_id
              });
              console.log(_title, _desc);
          }.bind(this)}>

          </CreateContent>

      } else if (this.state.mode === 'update') {
          _content = this.getReadContent();
          _article = <UpdateContent data={_content} onSubmit={function (_id, _title, _desc) {
            // 새로운 배열에 contents내용을 복사하여 만든다.  
            var _contents = Array.from(this.state.contents);
            var i = 0;
            while(i < _contents.length){
                if(_contents[i].id === _id) {
                    _contents[i] = {id:_id, title:_title, desc:_desc};
                    break;
                }
                i = i + 1;
            }  

            this.setState({
                contents: _contents,
                mode:'read'
            });
            console.log(_title, _desc);
          }.bind(this)}>

          </UpdateContent>
      }
      return _article;
  }

  render() {
        console.log('App render start');

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
                <Control onChangeMode = {function (_mode) {
                    if(_mode === 'delete'){
                        if(window.confirm('동무 진짜 지우실겁네까?')){
                            var _contents = Array.from(this.state.contents);
                            var i = 0;
                            while(i < this.state.contents.length){
                                if(_contents[i].id === this.state.selected_content_id){
                                    _contents.splice(i, 1);
                                    break;
                                }
                                i = i + 1;
                            }
                            this.setState({
                                mode:'welcome',
                                contents:_contents
                            });
                            alert('혁명적으로다가 지워 버렸습네다!')
                        }
                    } else {
                      this.setState({
                          mode:_mode
                      });
                    }
                }.bind(this)}>
                </Control>
                {this.getContent()}
            </div>
            );
        }
    }

export default App;
