import React from 'react';
import {store} from '../store';
import {Provider} from "react-redux";
import {ConnectedDashboard} from "./Dashboard";
import {history} from "../store/history";
import {Route, Router} from "react-router";
import {ConnectedNavigation} from "./Navigation";
import {ConnectTaskDetail} from "./TaskDetail";

export const Main = ({groups}) => (
    <Router history={history}>
        <Provider store={store}>
            <div>
                <ConnectedNavigation />

                <Route exact path="/dashboard" render={() => <ConnectedDashboard/>}/>
                <Route exact path="/task/:id" render={({match}) => <ConnectTaskDetail match={match} />}/>
            </div>

        </Provider>
    </Router>
)
