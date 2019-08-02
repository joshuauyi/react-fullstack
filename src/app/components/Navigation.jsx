import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navigaion = ()=> (
    <div>
        <Link to="/dashboard">
            <h1>My application</h1>
        </Link>
    </div>
)

export const ConnectedNavigation = connect(state=>state)(Navigaion);

