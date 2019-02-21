import '../public/favicon.ico';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from "react-router-dom";

import RootComponent from './app/RootComponent';

ReactDOM.render(
    <BrowserRouter>
        <RootComponent />
    </BrowserRouter>, document.getElementById("root"));