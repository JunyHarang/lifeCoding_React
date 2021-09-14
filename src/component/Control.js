import React, { Component } from "react";

class Control extends Component { // 나는 Subject(첫글자 대문자)라는 Component로 만들겠다.
    render() { // 반드시 render함수가 있어야 한다. 또한 Class안에 있는 함수(Method)는 function을 생략한다.

        console.log('Control render Start')

        return (
            // Component를 만들 때는 반드시 하나의 최상위 Tag만 (딱 하나) 써야 한다.
            <ul>
                <li>
                    <a href="/create" onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangeMode('create');
                    }.bind(this)}>create</a>
                </li>

                <li>
                    <a href="/update" onClick={function (e) {
                        e.preventDefault();
                        this.props.onChangeMode('update');
                    }.bind(this)}>update</a>
                </li>

                <li>
                    <input type="button" value="delete" onClick={function (e) {
                            e.preventDefault();
                            this.props.onChangeMode('delete');
                        }.bind(this)} type = "button" value = "delete">
                    </input>
                </li>
            </ul>
        );
    } // render() 끝

} // Subject Component 끝

export default Control;


