import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import QuickGrades from './pages/QuickGrades';
import TestAss from './pages/TestAss';

export default function App() {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={QuickGrades} />
        <Route path="/ass" component={TestAss} />
      </Switch>
    </Router>
  );
}
