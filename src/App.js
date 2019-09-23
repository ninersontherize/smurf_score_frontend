import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home.component";
import Search from "./components/search.component";

import logo from "./lol-logo.png";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://na.leagueoflegends.com/en/" target="_blank">
              <img src={logo} width="30" height="30" alt="leagueoflegends.com"/>
            </a>
            <Link to="/" className="navbar-brand">Smurf Score App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/search/" className="nav-link">Search for a Smurf</Link>
                </li>
              </ul>
            </div>
          </nav>
          
          <Route path="/" exact component={Home} />
          <Route path="/search/" component={Search} />
          {/*<Route path="/history" component={MatchHistory} />*/}
        </div>
      </Router>
    );
  }
}

export default App;
