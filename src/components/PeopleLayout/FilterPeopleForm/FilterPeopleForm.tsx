import React, { ChangeEvent, Component } from 'react';
import { Button } from '../../../common/Button/Button';
import { SelectProps } from '../../../common/Field/Select/Select';
import LabelField, {
  LabelFieldProps
} from '../../../common/LabelField/LabelField';
import Message from '../../../common/Message/Message';
import Auxiliary from '../../../containers/hoc/Auxiliary';
import {
  Country,
  CountryPetitioner
} from '../../../request/country/country-petitioner';
import Spinner from './../../../common/Spinner/Spinner';
import './FilterPeopleForm.css';

interface FilterPeopleFormProps {
  submitted: Function;
}

interface FilterPeopleFormState {
  fields: any;
  waiting: boolean;
  errorWaiting: boolean;
}

class FilterPeopleForm extends Component<
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
          changed: this.updateFieldValue,
          focus: true,
          selectAll: true,
          minimum: 0
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
    },
    waiting: true,
    errorWaiting: false
  };

  componentDidMount() {
    CountryPetitioner.doRequest()
      .then((countries: Country[]) => {
        const countriesListOption = countries.map((country: Country) => ({
          value: country.isoCode,
          name: country.name
        }));

        this.setState(previousState => {
          const fields = { ...previousState.fields };
          const fieldProps = fields['country-select'].fieldProps as SelectProps;
          fieldProps.options = countriesListOption;

          return { fields, waiting: false };
        });
      })
      .catch(() => {
        this.setState({ fields: [], waiting: false, errorWaiting: true });
      });
  }

  formSubmitted = () => {
    this.props.submitted({
      ssn: this.state.fields['ssn-text-number'].fieldProps.value,
      country: this.state.fields['country-select'].fieldProps.value
    });
  };

  getContent = () => {
    let content: JSX.Element;
    if (this.state.waiting) {
      content = <Spinner center />;
    } else if (this.state.errorWaiting) {
      content = (
        <Message error>
          Ocurrió un error, vuelva a intentarlo más tarde.
        </Message>
      );
    } else {
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

      content = (
        <Auxiliary>
          {mappedFields}
          <Button type='Info' clicked={this.formSubmitted}>
            Buscar
          </Button>
        </Auxiliary>
      );
    }
    return content;
  };

  render() {
    return <div className='FilterPeopleForm'>{this.getContent()}</div>;
  }
}

export default FilterPeopleForm;
