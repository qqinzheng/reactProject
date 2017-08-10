import React, { Component } from 'react';


class PercentageShower extends Component {

    render() {
        return (
            <div>
                {(this.props.percentNumber * 100).toFixed(2) + '%'}
            </div>
        )
    }
}

export default PercentageShower;