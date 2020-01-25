import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Demo extends Component {
    render() {
        return <div className="box">{this.props.text}</div>
    }
}

ReactDom.render(
    <Demo text='Hello World' />,
    document.getElementById('app')
);
