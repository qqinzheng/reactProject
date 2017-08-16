import React, { Component, PropTypes } from 'react';

import {connect} from 'react-redux';

class Header extends Component {
    static contextTypes = {
        store: PropTypes.object
    }

    // constructor() {
    //     super()
    //     this.state = { themeColor: '' }
    // }

    // componentWillMount() {
    //     const {store} = this.context;
    //     this._updateThemeColor();
    //     store.subscribe(() => this._updateThemeColor());
    // }

    // _updateThemeColor() {
    //     const { store } = this.context
    //     const state = store.getState()
    //     this.setState({ themeColor: state.themeColor });
    // }

    componentWillMount() {
        console.log(';alala');    
    }

    render() {
        return (
           <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    };
}

Header = connect(mapStateToProps)(Header);
export default Header;

