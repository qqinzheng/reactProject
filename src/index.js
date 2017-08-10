import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Computer from './Computer';
import Index from './List';
import PercentageApp from './PercentConverter/PercentageApp';
import CommentApp from './Comment/CommentApp';
import {defaultPost} from './Post';
import registerServiceWorker from './registerServiceWorker';

class Header extends Component {
    constructor() {
        super();
        this.handleClickOnTitle = this.handleClickOnTitle.bind(this);
    }

    // 默认props配置
    static defaultProps = { // props属性一旦传进来,就不可以改变。通过父组件主动重新渲染的方式来传入新的 props，从而达到更新的效果
        likeText: '点赞',
        unlikedText: '取消'
    }

    handleClickOnTitle(e) {
        console.log(this); // this值为null,react的调用方式是直接调用
        console.log(e);
        this.setState((prevState) => { // this.setState 传入一个函数,表示的是,取得上一次setState的结果,然后作为prevState 传入进下一个setState.
            console.log(prevState);
            return { count: 0 };
        })

        this.setState((prevState) => {
            console.log(prevState);
            return { count: prevState.count + 1 };
        })

        this.setState((prevState) => {
            console.log(prevState);
            return { count: prevState.count + 2 };
        })
    }

    render() {
        return (
            <div onMouseDown={this.handleClickOnTitle} >
                <Title></Title>
                {this.props.likeText}
                {this.props.unlikedText}
            </div>
        );
    }
}

class Title extends Component {
    render() {
        return (
            <h1>react 小书</h1>
        );
    }
}

function RenderContent(props) { // 用花括号 包含的是一个表达式
    const className = 'qin';
    const isGoodWord = false;
    function renderGoodWord(goodWord, badWord) {
        const isGoodWord = false;
        return isGoodWord ? goodWord : badWord;
    }


    return (<div>
        <h1 className={className}>{1 + 1}</h1>
        <label htmlFor='123' style={{ backgroundColor: 'red' }} data-id='123'>123</label>
        {renderGoodWord(<strong> is good word </strong>, <strong> is bad word </strong>)}
    </div>
    );
}

class Notification extends Component {
    constructor(props) {
        super(props);
    }

    getNotificationsCount() {
        console.log(this.props);
        return this.props.count;
    }

    render() {
        var returnMessage = this.getNotificationsCount();
        const title = <h1 className='title'>ScriptOJ</h1>;
        const page = <div className='content'>{title}</div>
        return (<div>{returnMessage > 0 ? <span>有{returnMessage}条未读消息</span> : <span>没有未读消息</span>}{page} </div>);
    }
}

console.log(React.createElement(PercentageApp,null));

const Abc = defaultPost({color: 'red'});

ReactDOM.render(<CommentApp />,document.getElementById('root')); //<Header likeText='qin' unlikedText='zheng' />  Post content='aaa'><Title / </Post>,<Abc style={{ color: 'blue', fontSize: '13px' }} />
registerServiceWorker();
