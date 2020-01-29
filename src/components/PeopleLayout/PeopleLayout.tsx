import React, { Component } from 'react';
import Auxiliary from '../../containers/hoc/Auxiliary';
import Person from '../../models/person';
import {
  PersonPetitioner,
  PersonRequest
} from '../../request/person/person-petitioner';
import Title from './../../common/Title/Title';
import Waiting from './../../common/Waiting/Waiting';
import CenterLayout from './../../containers/CenterLayout/CenterLayout';
import FilterPeopleForm from './FilterPeopleForm/FilterPeopleForm';
import './PeopleLayout.css';
import PersonCard from './PersonCard/PersonCard';

interface PeopleLayoutState {
  person: Person | undefined;
  searched: boolean;
  waitingPerson: boolean;
}

class PeopleLayout extends Component<{}, PeopleLayoutState> {
  state = {
    person: undefined,
    searched: false,
    waitingPerson: false
  };

  onSubmit = (personRequest: PersonRequest) => {
    this.setState({ waitingPerson: true });
    PersonPetitioner.doRequest(personRequest)
      .catch(() => undefined)
      .then((person: Person | undefined) =>
        this.setState({
          person,
          searched: true,
          waitingPerson: false
        })
      );
  };

  getPersonCard = () => {
    let personCard = null;
    if (this.state.waitingPerson) {
      personCard = <Waiting>Buscando a la persona</Waiting>;
    } else if (this.state.searched) {
      personCard = (
        <CenterLayout>
          <PersonCard person={this.state.person} />
        </CenterLayout>
      );
    }
    return personCard;
  };

  render() {
    return (
      <Auxiliary class='PeopleLayout'>
        <Title>Buscá a una Persona</Title>
        <FilterPeopleForm submitted={this.onSubmit} />
        {this.getPersonCard()}
      </Auxiliary>
    );
  }
}

export default PeopleLayout;
