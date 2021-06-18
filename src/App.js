import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './components/Context';
import Home from './components/Home';
import Upload from './components/Upload';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return(
    <Provider>
      <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/Upload' component={Upload}/>
            </Switch>
        </Router>
    </Provider>
  );
}

export default App;
