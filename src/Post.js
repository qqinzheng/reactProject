import React, { Component } from 'react';


class Post extends Component {

    constructor() {
        super();
        this.state = {
            content: '<h1>React.js 小书</h1>',
            color: 'blue'
        }
    }

    onClickP() {
        console.log(this.props.children);
        console.log(this.p.clientHeight);
    }

    render() {
        return (
            <div style={{ fontSize: '12px', color: this.state.color }} dangerouslySetInnerHTML={{ __html: this.state.content }}>
                {/*<p onClick={this.onClickP.bind(this)} ref={(p) => this.p = p}>{this.props.content}</p>
                {this.props.children}
                {this.state.content}*/}
            </div>
        )
    }
}

function getDefaultStyledPost(defaultProps) {
    return (
        class Post extends Component {
            static defaultProps = {
                style: defaultProps
            }

            render() {
                return (
                    <p style={this.props.style}>123123aaa</p>
                )
            }
        }
    );
}

export { getDefaultStyledPost  as defaultPost};