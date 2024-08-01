// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Advanced React App</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" exact component={Users} />
            <Route path="/users/:id" component={UserDetails} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
