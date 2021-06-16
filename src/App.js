import logo from './logo.svg';
import './App.css';
import Provider from './components/Context';
import Posts from './components/Posts';
import Upload from './components/Upload';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route path='/' component={ Posts } />
          <Route path='/Upload' component={ Upload } />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
