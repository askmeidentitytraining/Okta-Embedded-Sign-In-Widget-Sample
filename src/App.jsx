import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Home from './Home';
import Login from './Login';
import Protected from './Protected';
import config from './config';
import Courses from './components/Courses';

import logo from './Logo.2dffcf55ceb3a3dd0225 (2) (1) (1).png';
import './App.css';

const oktaAuth = new OktaAuth(config.oidc);

const App = () => {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '', window.location.origin));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>My Customer Application</p>
        <img src={logo} className="App-logo" alt="logo" />
      <Security
        oktaAuth={oktaAuth}
        onAuthRequired={customAuthHandler}
        restoreOriginalUri={restoreOriginalUri}
      >
        <Route path="/" exact component={Home} />
        {/* <Route path="/courses" component={Courses} /> */}
        <SecureRoute path="/protected" component={Protected} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/login/callback" component={LoginCallback} />
    </Security>
    </header>
    </div>
  );
};

export default App;
