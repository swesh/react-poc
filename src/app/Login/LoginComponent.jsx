import React, { Component } from 'react';
import Select from "react-select";
import { Button, FormGroup, FormControl, ControlLabel, HelpBlock } from "react-bootstrap";
import authenticator, { replicate } from '../services/authAPIService';
import { Redirect } from 'react-router-dom';

import FormErrors from '../common/FormErrors';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            username: "",
            password: "",
            formErrors: { username: '', password: '' },
            usernameValid: false,
            passwordValid: false,
            formValid: false,
            states: [],
            stateOption: null
        };
        this.getStates();
        this.handleChange = this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.login = this.login.bind(this);
    }

    getStates() {
        authenticator().then((response) => {
            console.log("Response ", response);
            this.setState({
                states: response
            });
        });

    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'username':
                usernameValid = value.length >= 6;
                fieldValidationErrors.username = usernameValid ? '' : 'Username is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : 'Password is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            usernameValid: usernameValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.usernameValid && this.state.passwordValid });
    }

    getValidationState(error) {
        return (error.length === 0 ? null : 'error');
    }

    handleChange(e) {
        const id = e.target.id;
        const value = e.target.value;
        this.setState({ [id]: value },
            () => { this.validateField(id, value) });
    }

    login(e) {
        e.preventDefault();
        const body = { "planId": "PD040001AZPPF28D", "planYr": "2028", "schCdtId": "SC002019FPSTD19F", "schId": "SC040001AZPBC28D", "scheduleId": "SC040001AZPPF28D", "shareSch": 0, "txUid": "dos61890" };
        replicate(body).then((response) => {
            alert("Response ", response);
        })
    }

    stateChange = (stateOption) => {
        this.setState({ stateOption: stateOption });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />
        }
        if (this.state.states.length > 0) {
            this.stateData = [];
            this.state.states.map((data) => {
                this.stateData.push({ "value": data.stateCode, "label": data.stateName });
                return null;
            });
        } else {
            this.stateData = [];
        }

        return (
            <div>
                <div className="panel panel-danger">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <h1 className="text-info">Fetch State Demo</h1>
                <div>
                    <form onSubmit={this.login}>
                        {/* <FormGroup controlId="username" validationState={this.getValidationState(this.state.formErrors.username)}>
                            <ControlLabel>Username</ControlLabel>
                            <FormControl
                                autoFocus
                                type="text"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                            <FormControl.Feedback />
                            {this.state.formErrors.username ? <HelpBlock>{this.state.formErrors.username}</HelpBlock> : null}
                        </FormGroup> */}
                        {/* <FormGroup controlId="password" validationState={this.getValidationState(this.state.formErrors.password)}>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                            />
                            <FormControl.Feedback />
                            {this.state.formErrors.password ? <HelpBlock>{this.state.formErrors.password}</HelpBlock> : null}
                        </FormGroup> */}
                        <Select autosize={false} id="drpState" name="drpState" className="selectDesign selectpicker show-tick show-menu-arrow"
                            data-width="auto" placeholder="Select State" data-size="10" options={this.stateData} value={this.state.stateOption} onChange={this.stateChange}>
                        </Select>
                        <Button
                            block
                            disabled={false}
                            type="submit">
                            Replace call
                    </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginComponent;