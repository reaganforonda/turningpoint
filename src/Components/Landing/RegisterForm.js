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
    }

    handleInputChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return (
            <form>
                <div>
                    <h2>Create An Account</h2>
                </div>
                <div>
                    <input placeholder='Emai' name='email' type='email' value={this.state.email} 
                        onChange={(e) => this.handleInputChange(e)} />
                </div>
            </form>
        )
    }
}