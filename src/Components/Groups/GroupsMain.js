import React from 'react';
import {withRouter} from 'react-router-dom';
import AddGroupForm from './AddGroupForm';

export class GroupsMain extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayAddForm: false
        }

        this.toggleDisplayForm = this.toggleDisplayForm.bind(this);
    }

    toggleDisplayForm() {
        if(this.state.displayAddForm) {
            this.setState({displayAddForm: false});
        } else {
            this.setState({displayAddForm: true});
        }
    }

    render() {
        return (
            <div>
                <h1>Groups</h1>
                <button onClick={()=>this.toggleDisplayForm()}>Create A New Group</button>
                {
                    !this.state.displayAddForm ? null : <AddGroupForm toggleDisplayForm={this.toggleDisplayForm}/>
                }
            </div>
        )
    }
}

export default withRouter(GroupsMain);