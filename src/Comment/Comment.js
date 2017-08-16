import React, { PropTypes, Component } from 'react';

class Comment extends Component {

    // 决定值的类型
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func.isRequired,
        index: PropTypes.number
    };

    constructor() {
        super();
        this.state = {
            timeString: ''
        };
    }

    componentWillMount() {
        this._updateTimeString();
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }

    componentWillUnmount() {
        clearInterval(this._timer);
    }


    _updateTimeString() {
        var createTime = this.props.comment.createTime;
        if (createTime) {
            var duration = (Date.now() - createTime) / 1000;
            var timeString = duration >= 60 ? `${Math.round(duration / 60)}分钟前` : `${Math.round(Math.max(duration, 1))}秒前`;
            this.setState({
                timeString: timeString
            });
        }
    }

    handleDeleteCommand() {
        this.props.onDeleteComment(this.props.index);
    }

    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username} </span>：
                </div>
                <p>{this.props.comment.content}</p>
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
                <span className='comment-delete' onClick={this.handleDeleteCommand.bind(this)}>
                    删除
                </span>
            </div>
        );
    }
}

export default Comment;