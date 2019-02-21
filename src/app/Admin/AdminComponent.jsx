import React, { Component } from 'react';
import { authenticator } from '../services/authAPIService';

class AdminComponent extends Component {
    render() {
        return (
            <div>
                <h1 className="text-info">Admin Component</h1>
                <h4 className="text-success">Welcome, you are an authenticated user.</h4>
            </div>
        );
    }

    componentWillUnmount(){
        authenticator.logout();
    }
}

export default AdminComponent;