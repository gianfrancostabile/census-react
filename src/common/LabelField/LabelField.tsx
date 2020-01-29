import React, { Component } from 'react';
import FieldProps from '../Field/field-props';
import FieldBuilder from './../Field/FieldBuilder';
import Label from './../Label/Label';
import './LabelField.css';

export interface LabelFieldProps {
  labelContent: string;
  fieldType: string;
  fieldProps: FieldProps;
}

class LabelField extends Component<LabelFieldProps> {
  render() {
    return (
      <div className="LabelField">
        <Label for={this.props.fieldProps.id}>{this.props.labelContent}</Label>
        <FieldBuilder
          type={this.props.fieldType}
          fieldProps={this.props.fieldProps}
        />
      </div>
    );
  }
}

export default LabelField;
