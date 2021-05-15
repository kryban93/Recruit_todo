import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainView from './views/MainView/MainView';
import SearchView from './views/SearchView/SearchView';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={MainView} />
          <Route path='/search' component={SearchView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
