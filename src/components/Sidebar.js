import React, { Component } from 'react';
import { connect } from "react-redux";
import { slide as Menu } from 'react-burger-menu';
import MenuItem from 'material-ui/MenuItem';

import { reduxForm, Field } from 'redux-form';
import { RadioButton } from 'material-ui/RadioButton';
import {
    Checkbox,
    RadioButtonGroup,
    SelectField,
    TextField,
    Toggle,
    DatePicker
} from 'redux-form-material-ui';

class Sidebar extends Component {

    render = () => (
        <Menu isOpen={false}>
            <form>
                <Field name="username" component={TextField} hintText="Street" />

                <Field name="plan" component={SelectField} hintText="Select a plan">
                    <MenuItem value="monthly" primaryText="Monthly" />
                    <MenuItem value="yearly" primaryText="Yearly" />
                    <MenuItem value="lifetime" primaryText="Lifetime" />
                </Field>

                <Field name="agreeToTerms" component={Checkbox} label="Agree to terms?" />

                <Field name="eventDate" component={DatePicker} format={null} hintText="What day is the event?" />

                <Field name="receiveEmails" component={Toggle} label="Please spam me!" />

                <Field name="bestFramework" component={RadioButtonGroup}>
                    <RadioButton value="react" label="React" />
                    <RadioButton value="angular" label="Angular" />
                    <RadioButton value="ember" label="Ember" />
                </Field>
            </form>
        </Menu>
    );
}


Sidebar = reduxForm({
    form: 'Sidebar'
  })(Sidebar)
  
  export default Sidebar
