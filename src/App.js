import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './components/Context';
import Header from './components/Header';
import Posts from './components/Posts';
import Upload from './components/Upload';
import Footer from './components/Footer';
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
        <Header />
        <Router>
          <Switch>
            <Route exact path='/' component={ Posts } />
            <Route path='/upload' component={ Upload } />
          </Switch>
        </Router>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
