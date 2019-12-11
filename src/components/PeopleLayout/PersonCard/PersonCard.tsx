import React, { Component } from 'react';
import Person from './../../../model/person';

export interface PersonCardProps {
  person: Person | undefined;
}

export class PersonCard extends Component<PersonCardProps> {
  render() {
    return (
      <div>
        <p>
          {(this.props.person) ? Object.values(this.props.person).join(" ") : "Empty"}
        </p>
      </div>
    );
  }
}
