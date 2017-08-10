import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {

    render() {
        const comments = this.props.listInfo;
        return (
            <div>
                 {comments.map((comment, i) => {
                    return (
                        <Comment key={i} comment= {comment}/>
                    )
                })}
            </div>
        );
    }
}

export default CommentList;