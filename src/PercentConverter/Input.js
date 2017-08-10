import React, { Component } from 'react';


class Input extends Component {

    constructor() {
        super();
        this.state = {
            number: 0
        };
    }

    onChangeInput(event) {
        const value = event.target.value;
        if (this.props.onChangeInput) {
            this.props.onChangeInput(value);
        }

        this.setState({
            number: value
        });
    }

    render() {
        return (
            <div>
                <input id='123' type='number' value={this.state.number} onChange={this.onChangeInput.bind(this)} />
            </div>
        )
    }
}

export default Input;