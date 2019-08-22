import React from 'react';

export default class AddGroupForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            groupName: '',
            groupDescription: ''
        }
    }

    render() {
        return (
            <form>
                <h2>Create a Group</h2>
                <div>
                    <input name='groupName' type='text' />
                </div>
            </form>
        )
    }
}

