import React, { ChangeEvent, Component } from 'react';
import { Button } from '../../../common/Button/Button';
import { SelectProps } from '../../../common/Field/Select/Select';
import {
  LabelField,
  LabelFieldProps
} from '../../../common/LabelField/LabelField';
import {
  Country,
  CountryPetitioner
} from '../../../request/country/country-petitioner';
import './FilterPeopleForm.css';

export interface FilterPeopleFormProps {
  submitted: Function;
}

export interface FilterPeopleFormState {
  fields: any;
}

export class FilterPeopleForm extends Component<
  FilterPeopleFormProps,
  FilterPeopleFormState
> {
  updateFieldValue = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const fieldId: string = event.target.id;
    const fieldValue: any = event.target.value;
    this.setState(previousState => {
      const fields = { ...previousState.fields };
      const modifiedField = fields[fieldId];
      modifiedField.fieldProps.value =
        typeof modifiedField.fieldProps.value === 'number'
          ? Number(fieldValue)
          : fieldValue;
      return { fields };
    });
  };

  state = {
    fields: {
      'ssn-text-number': {
        labelContent: 'Documento de identidad:',
        fieldType: 'number',
        fieldProps: {
          id: 'ssn-text-number',
          value: 0,
          changed: this.updateFieldValue
        }
      },
      'country-select': {
        labelContent: 'Pais:',
        fieldType: 'select',
        fieldProps: {
          id: 'country-select',
          value: 'AR',
          changed: this.updateFieldValue,
          options: []
        }
      }
    }
  };

  componentDidMount() {
    CountryPetitioner.doRequest().then((countries: Country[]) => {
      const countriesListOption = countries.map((country: Country) => ({
        value: country.isoCode,
        name: country.name
      }));

      this.setState(previousState => {
        const fields = { ...previousState.fields };
        const fieldProps = fields['country-select'].fieldProps as SelectProps;
        fieldProps.options = countriesListOption;

        return { fields };
      });
    });
  }

  formSubmitted = () => {
    this.props.submitted({
      ssn: this.state.fields['ssn-text-number'].fieldProps.value,
      country: this.state.fields['country-select'].fieldProps.value
    });
  };

  render() {
    const mappedFields = Object.values(
      this.state.fields
    ).map((field: LabelFieldProps) => (
      <LabelField
        key={field.fieldProps.id}
        labelContent={field.labelContent}
        fieldType={field.fieldType}
        fieldProps={field.fieldProps}
      />
    ));
    return (
      <div className="FilterPeopleForm">
        {mappedFields}
        <Button type="Info" clicked={this.formSubmitted}>Buscar</Button>
      </div>
    );
  }
}
