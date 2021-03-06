import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

// import HomeComponent from './Home/HomeComponent';


const LoginComponent = Loadable({
    loader: () => import('./Login/LoginComponent'),
    loading: () => <div>Loading....</div>
});

export default (
    <Switch>
        <Route exact path="/" component={LoginComponent} />
        {/* <Route path="/login" component={LoginComponent} /> */}
        <Route path="**" render={() => (
            <article>
                <h1 className="text-danger">Component Not Found...</h1>
                <p className="text-danger">Route not defined</p>
            </article>
        )} />
    </Switch>
);