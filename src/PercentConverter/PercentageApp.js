import React, { Component } from 'react';
import Input from './Input';
import PercentageShower from './PercentageShower';


class PercentageApp extends Component {
    constructor() {
        super();
        this.state = {
            inputNumber: 0,
            date: new Date()
        }
        console.log('construct');
    }

    componentWillMount() {
        this.timer = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)
        console.log('componentWillMount');
    }

    componentDidMount() { // 有些组件的启动是依赖dom的,因此这个步骤是组件进行挂载完毕,dom渲染成功后调用的。
        console.log('componentDidMount');
    }

    onChangeInput(inputNumber) {
        console.log(this.input);
        this.setState({
            inputNumber: inputNumber
        });
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timer);
    }

    shouldComponentUpdate(nextProps,nextState) {
        return true;
    }

    render() {
        //  ref={(input) => this.input = input}  这边可以获取Input组件实例,如果是普通标签,则会使这个标签元素
        return (
            <div>
                <Input  onChangeInput={this.onChangeInput.bind(this)} />
                <PercentageShower percentNumber={this.state.inputNumber} />
                 {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}

export default PercentageApp;