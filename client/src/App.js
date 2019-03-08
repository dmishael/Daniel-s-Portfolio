import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Posts from './components/Posts';
import UserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';
import AddBookingForm from './components/AddBookingForm';
import AddPost from './components/AddPost';
import LandingPage from './components/LandingPage';

//hello 
class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/userForm" component={UserForm} />
            <Route exact path="/users/:id/edit" component={EditUserForm} />
            {/* <Route exact path="/users/:id" component={Profile} /> */}
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/Post/:id" component={AddPost} />

            <Route exact path="/Posts/:id/Book" component={AddBookingForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
