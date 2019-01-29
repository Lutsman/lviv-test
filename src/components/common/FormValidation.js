import * as React from 'react';

export class FormValidation extends React.Component {
    state = {};

    limits = {}; // fieldName: {min: number, max: number}

    fields = []; // string[]

    isValidField = field => {
        if (!this.state[field] || !this.limits[field]) return false;

        if (!this.limits[field].min) return true;

        return this.state[field].length > this.limits[field].min
    };

    isValidForm = () => {
        return this.fields.every(field => {
            const isValid = this.isValidField(field);
            return isValid;
        })
    };

    handleChange = field => e => {
        const {value} = e.target;

        if (this.limits[field].max && value.length > this.limits[field].max) return;

        this.setState({
            [field]: value,
        });
    };

    getValidationClassName = field => this.isValidField(field) ? '' : 'form-input__error';
}
