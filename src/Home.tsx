import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import UsersList from './components/UsersList/UsersList';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import UserDetails from './components/UserDetails/UserDetails';
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
          <UsersList />
        </Route>
        <Route path={userDetailsPathUsedInRouting}>
          <UserDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Home;
