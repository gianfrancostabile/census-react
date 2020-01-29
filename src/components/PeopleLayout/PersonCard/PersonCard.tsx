import React, { Component } from 'react';
import Auxiliary from '../../../containers/hoc/Auxiliary';
import Person from '../../../models/person';
import './PersonCard.css';

interface PersonCardProps {
  person: Person | undefined;
}

class PersonCard extends Component<PersonCardProps> {
  render() {
    const person = this.props.person;
    let content = person ? (
      <Auxiliary>
        <header>
          {person.name} {person.surname}
        </header>
        <p>
          Fecha de nacimiento: {person.bornDate}
          <br />
          Género: {person.genre}
          <br />
        </p>
      </Auxiliary>
    ) : (
      'No tenemos información de la persona'
    );

    return <div className='PersonCard'>{content}</div>;
  }
}

export default PersonCard;
