import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainView from './views/MainView/MainView';
import SearchView from './views/SearchView/SearchView';
import Nav from './components/Nav/Nav';
import Alert from './components/Alert/Alert';

function App() {
  return (
    <main className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={MainView} />
          <Route path='/search/:name' component={SearchView} />
        </Switch>
        <Alert />
      </Router>
    </main>
  );
}

export default App;
