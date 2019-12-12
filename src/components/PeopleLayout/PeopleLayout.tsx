import React, { Component } from 'react';
import Auxiliary from '../../containers/hoc/Auxiliary';
import Person from '../../model/person';
import {
  PersonPetitioner,
  PersonRequest
} from '../../request/person/person-petitioner';
import Title from './../../common/Title/Title';
import CenterLayout from './../../containers/CenterLayout/CenterLayout';
import { FilterPeopleForm } from './FilterPeopleForm/FilterPeopleForm';
import './PeopleLayout.css';
import { PersonCard } from './PersonCard/PersonCard';

interface PeopleLayoutState {
  person: Person | undefined;
  searched: boolean;
}

class PeopleLayout extends Component<{}, PeopleLayoutState> {
  state = {
    person: undefined,
    searched: false
  };

  formSubmitted = (personRequest: PersonRequest) => {
    PersonPetitioner.doRequest(personRequest)
      .catch(() => undefined)
      .then((person: Person | undefined) =>
        this.setState({
          person,
          searched: true
        })
      );
  };

  render() {
    const personCard = this.state.searched ? (
      <CenterLayout>
        <PersonCard person={this.state.person} />
      </CenterLayout>
    ) : null;
    return (
      <Auxiliary class='PeopleLayout'>
        <Title>Buscá a una Persona</Title>
        <FilterPeopleForm submitted={this.formSubmitted} />
        {personCard}
      </Auxiliary>
    );
  }
}

export default PeopleLayout;
