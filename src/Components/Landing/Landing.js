import React from 'react';
import RegisterForm from './RegisterForm';

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
            </div>
        )
    }
}