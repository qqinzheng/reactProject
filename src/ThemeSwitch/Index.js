import React, { Component, PropTypes } from 'react';
// import {Provider} from './react-redux';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import Header from './Header';
import Content from './Content';


class Index extends Component {

    render () {
        return (
            <Provider store={store} >
                <div>
                    <Header />
                    <Content />
                </div>
            </Provider>
        );
    }
}

// 创建一个store
// function createStore (reducer) {
//   let state = null
//   const listeners = []
//   const subscribe = (listener) => listeners.push(listener)
//   const getState = () => state
//   const dispatch = (action) => {
//     state = reducer(state, action)
//     listeners.forEach((listener) => listener())
//   }
//   dispatch({}) // 初始化 state
//   return { getState, dispatch, subscribe }
// }

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
} 
const store = createStore(themeReducer);



export default Index;