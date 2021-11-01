import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import BooksList from './components/usersList/UsersList';
import Layout from './components/Layout/Layout';
import BookDetails from './components/usersList/UserDetails/UserDetails';
import {
  appNamePathUsedInRouting,
  bookDetailsPathUsedInRouting,
} from './config/config';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path={appNamePathUsedInRouting} exact>
          <Redirect to="/" />
        </Route>
        <Route path="/" exact>
          <BooksList />
        </Route>
        <Route path={bookDetailsPathUsedInRouting}>
          <BookDetails />
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
