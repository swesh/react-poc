import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

import HomeComponent from './Home/HomeComponent';
import { authenticator } from './services/authAPIService';

const AboutComponent = Loadable({
    loader: () => import('./About/AboutComponent'),
    loading: () => <div>Loading....</div>
});

const LoginComponent = Loadable({
    loader: () => import('./Login/LoginComponent'),
    loading: () => <div>Loading....</div>
});

const ProductsComponent = Loadable({
    loader: () => import('./Products/ProductsComponent.jsx'),
    loading: () => <div>Loading....</div>
});

const AdminComponent = Loadable({
    loader: () => import('./Admin/AdminComponent'),
    loading: () => <div>Loading....</div>
});

const SecuredRoute = ({ component: Component, ...args }) => {
    return (
        <Route {...args} render={
            props => authenticator.isAuthenticated === true ? <Component {...props} /> :
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        } />
    )
};

export default (
    <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/products" component={ProductsComponent} />
        <Route path="/login" component={LoginComponent} />
        <SecuredRoute path="/admin" component={AdminComponent} />
        <Route path="**" render={() => (
            <article>
                <h1 className="text-danger">Component Not Found...</h1>
                <p className="text-danger">Route not defined</p>
            </article>
        )} />
    </Switch>
);