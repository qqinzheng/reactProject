import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentInput from './CommentInput';


class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            listInfo: []
        }
    }

    componentWillMount() {
        var comments = localStorage.getItem('comments');
        if (comments) {
            var comments = JSON.parse(comments);
            this.setState({
                listInfo: comments
            });
        }
    }

    _saveComments(comments) {
        localStorage.setItem('comments', JSON.stringify(comments)); // 如果存的是对象,对象会转为[Object object],会对值进行丢失
    }

    handleOnSubmit(listInfo) {
        if (!listInfo) return;
        if (!listInfo.username) return alert('请输入用户名');
        if (!listInfo.content) return alert('请输入评论内容');
        this.state.listInfo.push(listInfo);
        this.setState({
            listInfo: this.state.listInfo
        });
        this._saveComments(this.state.listInfo);
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleOnSubmit.bind(this)} />
                <CommentList listInfo={this.state.listInfo} />
            </div>
        );
    }
}


export default CommentApp;
