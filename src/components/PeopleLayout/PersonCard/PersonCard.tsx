import React, { Component } from 'react';
import Person from './../../../model/person';
import './PersonCard.css';
import Auxiliary from '../../../containers/hoc/Auxiliary';

export interface PersonCardProps {
  person: Person | undefined;
}

export class PersonCard extends Component<PersonCardProps> {
  render() {
    const person = this.props.person;
    let content = person ? (
      <Auxiliary>
        <header>
    <b>{person.name} {person.surname}</b>
        </header>
        <p>
          Fecha de nacimiento: {person.bornDate}<br />
          Género: {person.genre}<br />
        </p>
      </Auxiliary>
    ) : (
      'No tenemos información de la persona'
    );

    return <div className='PersonCard'>{content}</div>;
  }
}
