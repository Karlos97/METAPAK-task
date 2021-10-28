import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import UsersList from './components/usersList/UsersList';
import Layout from './components/Layout/Layout';
import UserDetails from './components/usersList/UserDetails';
import {
  appNamePathUsedInRouting,
  bookDetailsPathUsedInRouting,
} from './config/config';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Logo } from './assets/logo';
import { Title } from './components';
import { Button } from './components/Button';
import getUsersList from './helper/getData/getUsersList';
import { actionCreators } from './store';
import { RootState } from './store/reducers';
import './styles/home.css';

const Home = () => (
  //   const state = useSelector((state: RootState) => state.bank);
  //   const dispatch = useDispatch();

  //   const { increment, decrement, reset } = bindActionCreators(
  //     actionCreators,
  //     dispatch
  //   );

  //   return (
  //     <div className="App">
  //       <Logo height={200} width={200} />
  //       <div className="counter-container">
  //         <Button onClick={() => decrement(1)}> - </Button>
  //         <Title>{state}</Title>
  //         <Button onClick={() => increment(1)}> + </Button>
  //       </div>
  //       <Button onClick={() => reset()}> reset </Button>
  //     </div>
  //   );

  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path={appNamePathUsedInRouting} exact>
          <Redirect to="/" />
        </Route>
        <Route path="/" exact>
          <UsersList />
        </Route>
        <Route path={bookDetailsPathUsedInRouting}>
          <UserDetails />
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Home;
