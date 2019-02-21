import React, { Component } from 'react';
import ErrorHandler from './common/ErrorHandler';
import HeaderComponent from './Header/HeaderComponent';

class RootComponent extends Component {
    render() {
        return (
            <div className="container">
                <ErrorHandler>
                    <HeaderComponent />
                </ErrorHandler>
            </div>
        );
    }
}

export default RootComponent;