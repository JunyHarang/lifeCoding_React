import React, { Component } from "react";       // React안에서 컴포넌트 Class를 로딩한 것이다.

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href="1.html">HTML</a> </li>
                    <li><a href="2.html">CSS</a> </li>
                    <li><a href="3.html">JavaScript</a> </li>
                </ul>
            </nav>
        );
    }
}

// 이 코드로 인해서 다른 파일들이 Nav Component Class를 가져다 사용할 수 있다.
export default Nav;