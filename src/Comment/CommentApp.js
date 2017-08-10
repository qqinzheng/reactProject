import React, {Component} from 'react';
import CommentList from './CommentList';
import CommentInput from './CommentInput';


class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            listInfo: []
        }
    }

    onSubmit(listInfo) {
        if (!listInfo) return;
        if (!listInfo.username) return alert('请输入用户名');
        if (!listInfo.content) return alert('请输入评论内容');
        this.state.listInfo.push(listInfo);
        this.setState({
            listInfo: this.state.listInfo
        });
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmit= {this.onSubmit.bind(this)} />
                <CommentList listInfo= {this.state.listInfo} />
            </div>
        );
    }
}


export default CommentApp;
