import React, { PropTypes,Component } from 'react';

class CommentInput extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            content: ''
        }
    }

    static propTypes = {
        onSubmit: PropTypes.func
    }

    changeInput(event) {
        console.log(event);
        this.setState({
            username: event.target.value
        });
    }

    handleContentChange(event) {
        this.setState({
            content: event.target.value
        });
    }

    handleSubmit(event) {
        if (this.props.onSubmit) {
            const {username, content} = this.state;
            this.props.onSubmit({username,content});
        }
    }

    componentDidMount() {
        this.textarea.focus();
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input  onChange={this.changeInput.bind(this)} value={this.state.username}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea) => this.textarea = textarea}  onChange={this.handleContentChange.bind(this)} value={this.state.content}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        );
    }
}

export default CommentInput;