import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import 'bootstrap/dist/css/bootstrap.min.css';
import Transactions from './pages/Transactions';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Router history={history}>
        <Switch>
          <Route path='/' component={Transactions}></Route>
        </Switch>
      </Router>
    </App>
  </Provider>, document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
