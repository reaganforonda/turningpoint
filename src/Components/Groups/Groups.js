import React from 'react';
import {withRouter} from 'react-router-dom';

export class Group extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                Groups
            </div>
        )
    }
}

export default withRouter(Group);