import React, { Component } from 'react';
import Auxiliary from '../../containers/hoc/Auxiliary';
import FieldProps from './field-props';
import InputNumber, { InputNumberProps } from './Input/InputNumber/InputNumber';
import Select, { SelectProps } from './Select/Select';

interface FieldBuilderProps {
  type: string;
  fieldProps: FieldProps;
}

class FieldBuilder extends Component<FieldBuilderProps> {
  render() {
    let field = null;

    switch (this.props.type) {
      case 'select':
        field = <Select {...(this.props.fieldProps as SelectProps)} />;
        break;
      default:
        field = (
          <InputNumber {...(this.props.fieldProps as InputNumberProps)} />
        );
        break;
    }

    return <Auxiliary>{field}</Auxiliary>;
  }
}

export default FieldBuilder;
