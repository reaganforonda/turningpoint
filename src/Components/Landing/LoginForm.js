import React from 'react';
import * as util from '../../utilities/utilities';

export default class LoginForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            pw: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value});
    }

    handleFormSubmit(e) {
        e.preventDefault();

        if(util.validateEmail(this.state.email) && this.state.pw !== '') {
            
        } else {
            // TODO:
        }
    }

    render() {
        return (
            <form onSubmit={(e)=>this.handleFormSubmit(e)}>
                <h2>Please Login</h2>
                <div>
                    <input name='email' type='email' value={this.state.email} placeholder="Email" 
                       onChange={(e)=>this.handleInputChange(e)} />
                </div>
                <div>
                    <input required name='pw' type='password' value={this.state.pw} placeholder="Password" 
                        onChange={(e)=>this.handleInputChange(e)}/>
                </div>
                <div>
                    <button onClick={(e)=> this.handleFormSubmit(e)}>Log In</button>
                </div>
            </form>
        )
    }
}