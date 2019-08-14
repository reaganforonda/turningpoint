import React from 'react';
import {withRouter} from 'react-router-dom';

export class Friends extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                Friends
            </div>
        )
    }
}

export default withRouter(Friends);