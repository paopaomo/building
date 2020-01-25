import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { fn2 } from "./util";

class Demo extends Component {
    render() {
        fn2();
        return <div className="box">{this.props.text}</div>
    }
}

ReactDom.render(
    <Demo text='Hello World' />,
    document.getElementById('app')
);
