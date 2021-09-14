import React, { Component } from "react";       // React안에서 컴포넌트 Class를 로딩한 것이다.

class Nav extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Nav render shouldComponentUpdate Start',
        nextProps.data, this.props.data
        );

        if (this.props.data === nextProps.data) {
            return false;
        }

        return true;
    }

    render() {

        console.log('Nav render Start');

        var lists = [];
        var data = this.props.data;
        var i = 0;

        while (i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <a href={"/content/" + data[i].id}
                       // data-id = {data[i].id}
                       onClick={function (id, e) {
                         e.preventDefault();
                         this.props.onChangePage(e.target.dataset.id);
                       }.bind(this, data[i].id)}
                        >{data[i].title}
                    </a>
                </li>
            );
            i = i + 1;
        }

        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

// 이 코드로 인해서 다른 파일들이 Nav Component Class를 가져다 사용할 수 있다.
export default Nav;