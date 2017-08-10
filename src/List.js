import React, {Component} from 'react';

class List extends Component {
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
        const users = [
            {username: 'Jerry',age: 21, gender: 'male'},
            {username: 'Tommy', age: 22, gender: 'male'},
            {username: 'Lily', age: 19, gender: 'female'},
        ];

        const userElement = [];

        for (let user of users) {
            userElement.push(
                <div>
                    <div>姓名: {user.username}</div>
                    <div>年龄: {user.age}</div>
                    <div>性别: {user.gender}</div>
                    <hr />
                </div>
            );
        }

        return (
           <div>
            {userElement}
           </div>
        );
    }
}


class User extends Component {
    render() {
        const {user} = this.props;
        return (
            <div>
                <div>姓名: {user.username}</div>
                <div>年龄: {user.age}</div>
                <div>性别: {user.gender}</div>
                <hr />
            </div>
        );
    }
}


class Index extends Component {
    
  render () {
    const users = [
        {username: 'Jerry',age: 21, gender: 'male'},
        {username: 'Tommy', age: 22, gender: 'male'},
        {username: 'Lily', age: 19, gender: 'female'},
    ];
    // 如果代码块大于1行,则需要加上花括号并且需要有return关键字,如果返回一个对象,则需要加上圆括号。
    return (
      <div>
        {users.map((user,i) => <User user={user} key={i}/>)}  
      </div>
    )
  }
}

export default Index;