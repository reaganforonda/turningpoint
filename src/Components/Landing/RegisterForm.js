import React from 'react';

export default class RegisterForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:'',
            firstName: '',
            lastName: '',
            pw: '',
            confirmPW:''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    resetForm(){
        this.setState({
            email:'',
            firstName: '',
            lastName: '',
            pw: '',
            confirmPW:''
        })
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let user = Object.assign({}, this.state);
    }

    render(){
        return (
            <form onSubmit={(e) => this.handleFormSubmit(e)}>
                <div>
                    <h2>Create An Account</h2>
                </div>
                <div>
                    <input placeholder='Email' name='email' type='email' value={this.state.email} 
                        onChange={(e) => this.handleInputChange(e)} />
                </div>
                <div>
                    <input placeholder='First Name' name='firstName' type='text' value={this.state.firstName} 
                        onChange={(e) => this.handleInputChange(e)} />
                </div>
                <div>
                    <input placeholder='Last Name' name='lastName' type='text' value={this.state.lastName} 
                        onChange={(e) => this.handleInputChange(e)} />
                </div>
                <div>
                    <input placeholder='Password' name='pw' type='password' value={this.state.pw} 
                        onChange={(e) => this.handleInputChange(e)} />
                </div>
                <div>
                    <input placeholder='Confirm Password' name='confirmPW' type='password' value={this.state.confirmPW} 
                        onChange={(e) => this.handleInputChange(e)} />
                </div>
                <div>
                    <button onClick={(e) => this.handleFormSubmit(e)}>Create Account</button>
                </div>
            </form>
        )
    }
}