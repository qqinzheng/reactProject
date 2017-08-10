import React, {Component} from 'react';

class Computer extends Component {
    constructor (props){
        super(props);
        this.state = {
            status: 'off'
        }
    }

    clickSwitch() {
        this.setState({status: this.state.status == 'on'? 'off' : 'on'});
    }

    render() {
        var computerText =  this.state.status == 'on' ? '显示器亮了' : '显示器关了';
        return (
            <div onDoubleClick={()=>{this.clickSwitch()}}>
                <Screen showContent={computerText} />
            </div>
        );
    }

}


class Screen extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        showContent: '无内容'
    }

    render() {
        return (
            <div>{this.props.showContent}</div>
        );
    }

}


export default Computer;