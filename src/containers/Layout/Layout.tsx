import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar, { LinkProps } from '../../common/Navbar/Navbar';
import PeopleLayout from '../../components/PeopleLayout/PeopleLayout';
import Auxiliary from '../hoc/Auxiliary';

interface LayoutState {
  links: LinkProps[];
}

class Layout extends Component<{}, LayoutState> {
  state = {
    links: [
      {
        route: '/',
        message: 'Inicio',
        exact: true
      },
      {
        route: '/information',
        message: 'Mas información',
        exact: true
      }
    ]
  };

  render() {
    return (
      <Auxiliary>
        <Navbar links={this.state.links} />
        <Switch>
          <Route path='/' exact component={PeopleLayout} />
          <Route path='/information' exact render={() => <div>Hi</div>} />
          <Route render={() => <div>404 Not found</div>} />
        </Switch>
      </Auxiliary>
    );
  }
}

export default Layout;
