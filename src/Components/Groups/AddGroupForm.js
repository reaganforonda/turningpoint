import React from 'react';

export default class AddGroupForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            groupName: '',
            groupDescription: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        this.setState({[e.target.name] : e.target.value});
    }

    render() {
        return (
            <form>
                <h2>Create a Group</h2>
                <div>
                    <input name='groupName' type='text' placeholder='Group Name' onChange={(e)=>this.handleInputChange(e)}/>
                </div>
                <div>
                    <input name='groupDescription' type='text' placeholder='Group Description' onChange={(e)=>this.handleInputChange(e)}/>
                </div>
            </form>
        )
    }
}

