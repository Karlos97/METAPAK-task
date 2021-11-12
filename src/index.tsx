import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import Home from './Home';
import reducerRoot from './store/reducers/index';

const store = createStore(reducerRoot, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
