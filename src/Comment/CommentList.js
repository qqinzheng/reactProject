import React, { PropTypes,Component } from 'react';
import Comment from './Comment';

class CommentList extends Component {

    static propTypes = {
        onDeleteComment: PropTypes.func.isRequired
    }

    static contextTypes = {
        themeColor: PropTypes.string
    } 

    componentDidMount() {
        console.log(this);
    }

    handleDeleteComment(index) {
        this.props.onDeleteComment(index);
    }

    render() {
        const comments = this.props.listInfo;
        return (
            <div>
                 {comments.map((comment, i) => {
                    return (
                        <Comment onDeleteComment={this.handleDeleteComment.bind(this)} key={i} index={i} comment= {comment}/>
                    )
                })}
            </div>
        );
    }
}

export default CommentList;