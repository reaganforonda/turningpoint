import React from 'react';
import * as util from '../../utilities/utilities';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

export class LoginForm extends React.Component{
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
            let user = Object.assign({}, this.state);

            axios.post('/api/auth/login', user).then((result) => {
                console.log('result');
                this.props.history.push('/dashboard');
                // TODO:
            })
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

export default withRouter(LoginForm);