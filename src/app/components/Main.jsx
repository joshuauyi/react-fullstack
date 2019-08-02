import React from 'react';
import {store} from '../store';
import {Provider} from "react-redux";
import {ConnectedDashboard} from "./Dashboard";

export const Main = ({groups}) => (
    <Provider store={store}>
        <ConnectedDashboard/>
    </Provider>
)
