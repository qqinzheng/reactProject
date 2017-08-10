import React, { PropTypes,Component } from 'react';

class Comment extends Component {

    // 决定值的类型
    static propTypes = {
        comment: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username} </span>：
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        );
    }
}

export default Comment;