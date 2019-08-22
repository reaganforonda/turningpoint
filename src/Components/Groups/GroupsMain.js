import React from 'react';
import {withRouter} from 'react-router-dom';

export class GroupsMain extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Groups</h1>
                <button>Create A New Group</button>
            </div>
        )
    }
}

export default withRouter(GroupsMain);