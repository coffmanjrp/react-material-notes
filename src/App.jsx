import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Create, Notes } from './pages';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}
