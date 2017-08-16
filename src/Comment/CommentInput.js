import React, { PropTypes, Component } from 'react';

class CommentInput extends Component {

    static defaultProps = {

    }

    static propTypes = {
        onSubmit: PropTypes.func
    }

    static contextTypes = {
        themeColor: PropTypes.string
    } 

    constructor() {
        super();
        this.state = {
            username: '',
            content: ''
        }
    }

    componentWillMount() {
        this._loadUsername();
        this.context.themeColor = 'blue';
    }

    componentDidMount() {
        this.textarea.focus();
        console.log(this);
    }

    _saveUsername(username) {
        localStorage.setItem('username', username);
    }

    _loadUsername() {
        const username = localStorage.getItem('username');
        if (username) {
            this.setState({ username: username });
        }
    }

    blurInput(event) {
        this._saveUsername(event.target.value);
    }

    handleContentChange(event) {
        this.setState({
            content: event.target.value
        });
    }


    changeInput(event) {
        console.log(event);
        this.setState({
            username: event.target.value
        });
    }

    handleSubmit(event) {
        if (this.props.onSubmit) {
            const { username, content } = this.state;
            const createTime = +new Date();
            this.props.onSubmit({ username, content, createTime: createTime});
        }
        this.setState({
            content: ''
        });
    }


    renderHeader() {}


    renderContent(){}


    renderFooter(){}

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name' style={{color: this.context.themeColor}}>用户名：</span>
                    <div className='comment-field-input'>
                        <input onBlur={this.blurInput.bind(this)} onChange={this.changeInput.bind(this)} value={this.state.username} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea) => this.textarea = textarea} onChange={this.handleContentChange.bind(this)} value={this.state.content} />
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