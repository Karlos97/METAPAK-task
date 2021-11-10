import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import UsersList from './components/usersList/UsersList';
import Layout from './components/Layout/Layout';
import UserDetails from './components/usersList/UserDetails/UserDetails';
import {
  appNamePathUsedInRouting,
  userDetailsPathUsedInRouting,
} from './config/config';

import './styles/home.scss';

const Home: React.FC = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path={appNamePathUsedInRouting} exact>
          <Redirect to="/" />
        </Route>
        <Route path="/" exact>
          <UsersList />
        </Route>
        <Route path={userDetailsPathUsedInRouting}>
          <UserDetails />
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Home;
