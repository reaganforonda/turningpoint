import React from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

export default class Landing extends React.Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render(){
        return (
            <div>
                Landing
                <RegisterForm/>
                <LoginForm/>
            </div>
        )
    }
}