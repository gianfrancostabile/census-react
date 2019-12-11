import React, { Component } from 'react';
import { InputText, InputTextProps } from './Input/InputText/InputText';
import { InputNumber, InputNumberProps } from './Input/InputNumber/InputNumber';
import { Select, SelectProps } from './Select/Select';
import Auxiliary from '../../containers/hoc/Auxiliary';
import FieldProps from './field-props';

export interface FieldBuilderProps {
  type: string;
  fieldProps: FieldProps;
}

export class FieldBuilder extends Component<FieldBuilderProps> {
  render() {
    let field = null;

    switch (this.props.type) {
      case 'number':
        field = (
          <InputNumber {...(this.props.fieldProps as InputNumberProps)} />
        );
        break;
      case 'select':
        field = <Select {...(this.props.fieldProps as SelectProps)} />;
        break;
      default:
        field = <InputText {...(this.props.fieldProps as InputTextProps)} />;
        break;
    }

    return <Auxiliary>{field}</Auxiliary>;
  }
}
