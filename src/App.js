import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './components/Context';
import Header from './components/Header';
import Home from './components/Home';
import Upload from './components/Upload';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return(
    <Provider>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Upload' component={Upload} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
