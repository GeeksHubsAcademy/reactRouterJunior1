import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importacion de componentes

import Header from './components/header/header';
import Footer from './components/footer/footer';

//Importación de containers.

import Login from './containers/login/login';
import Home from './containers/home/home';
import Profile from './containers/profile/profile';
import Register from './containers/register/register';

function App() {
  return (
    <div>
        <Router>

          <Header />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/register" exact component={Register} />
          </Switch>

          <Footer />
        </Router>
    </div>
  );
}

export default App;
