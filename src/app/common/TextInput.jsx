import React, { Component } from 'react';

class TextInput extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.name} className="control-label col-sm-2">{this.props.label}</label>
                <div className="col-sm-6">
                    <input type="text" className="form-control" id={this.props.name}
                        value={this.props.value} name={this.props.name}
                        onChange={this.props.onChange} />
                </div>
            </div>
        );
    }
}

export default TextInput;