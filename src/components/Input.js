import React from 'react';
import { connect } from 'react-redux';
import { searchIp, searchDomain } from '../actions'
import { Field, reduxForm } from 'redux-form';
import './input.css';

const validate = value => {
    const errors = {}

    if (!value.address) {
        errors.address = 'Domain and IP examples: google.com or 8.8.8.8'
    }

    return errors
}

class Input extends React.Component {
    // Pass the address from the input to the action
    onSumbit = form => {
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(form.address)) {  
            this.props.searchIp(form.address)
        } else {
            this.props.searchDomain(form.address)
        }
    }

    renderInput = formProps => {
        return (
            <div>
                <input 
                    className="input-tracker"  
                    type="text"
                    placeholder="Search for any IP address or domain" 
                    autoComplete="off"
                    {...formProps.input}
                />
                <button className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg>
                </button>
                {formProps.meta.error ? <span className="error">{formProps.meta.error}</span> : ''}
            </div>
            
        )
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSumbit)}>
                <Field 
                    name="address"
                    component={this.renderInput}
                />
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        formValue: state.addressReducer 
    }
}

const mapDispatchToProps = {
    searchIp,
    searchDomain
}

export default reduxForm({
    form: 'TrackerForm',
    validate
})(connect(mapStateToProps, mapDispatchToProps)(Input))
