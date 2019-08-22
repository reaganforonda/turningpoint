import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import GroupsMain from '../Groups/GroupsMain';

export default class Dashboard extends React.Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                Dashboard
                <Switch>
                    <Route path='/dashboard/groups' component={GroupsMain}/>
                </Switch>
            </div>
        )
    }
}