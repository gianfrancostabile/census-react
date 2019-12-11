import React, { Component } from 'react';
import {
  PersonPetitioner,
  PersonRequest
} from '../../request/person/person-petitioner';
import { FilterPeopleForm } from './FilterPeopleForm/FilterPeopleForm';
import Person from '../../model/person';
import Auxiliary from '../../containers/hoc/Auxiliary';
import { PersonCard } from './PersonCard/PersonCard';

interface PeopleLayoutState {
  person: Person | undefined;
}

class PeopleLayout extends Component<{}, PeopleLayoutState> {
  state = {
    person: undefined
  };

  formSubmitted = (personRequest: PersonRequest) => {
    PersonPetitioner.doRequest(personRequest)
      .then(person =>
        this.setState({
          person
        })
      )
      .catch(() => this.setState({ person: undefined }));
  };

  render() {
    return (
      <Auxiliary>
        <FilterPeopleForm submitted={this.formSubmitted} />
        <PersonCard person={this.state.person} />
      </Auxiliary>
    );
  }
}

export default PeopleLayout;
