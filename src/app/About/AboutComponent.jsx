import React, { Component } from 'react';

class AboutComponent extends Component {
    constructor(props) {
        super(props);
        console.log("About - constructor");
    }
    
    render() {
        return (
            <div>
                <h1 className="text-info">About Component</h1>
                <h4 className="text-warning">This is a simple, React Routing Application.</h4>
            </div>
        );
    }

    componentWillUnmount(){
        console.log("About - componentWillUnmount");
    }
}

export default AboutComponent;