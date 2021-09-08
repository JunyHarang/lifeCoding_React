import React, { Component } from "react";

class Subject extends Component { // 나는 Subject(첫글자 대문자)라는 Component로 만들겠다.
    render() { // 반드시 render함수가 있어야 한다. 또한 Class안에 있는 함수(Method)는 function을 생략한다.

        console.log('Subject render Start')

        return (
            // Component를 만들 때는 반드시 하나의 최상위 Tag만 (딱 하나) 써야 한다.
            <header>
                <h1><a href ="/" onClick={function (e) {
                    e.preventDefault();

                    this.props.onChangePage();

                }.bind(this)}> {this.props.title}</a></h1>
                {this.props.sub}
            </header>
        );
    } // render() 끝

} // Subject Component 끝

export default Subject;


