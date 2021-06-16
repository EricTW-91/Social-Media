import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <div className='App'>

        <Router>
          <Switch>
            <Route path='/' component={ Posts } />
            {/* <Route path='/Upload' component={ Upload } /> */}
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
