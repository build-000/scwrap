import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Main from './pages/Main';
import Login from './pages/login/Login';
import Scrap from './pages/scrap/Scrap';
import ScrapDemo from './pages/scrap-demo/Scrap-Demo';
import MyPage from './pages/MyPage';
import Trip from './stories/trip/trip';
import TripDetail from './stories/trip/trip-detail';
import './App.css';
import firebase from './firebase';
import { checkAuthStateChanged, loginUser, logoutUser, linkFacebookUser } from './actions';
import Library from "./pages/Library/Library";

class App extends Component {
  componentDidMount = () => {
    this.props.checkAuthStateChanged(user => {
      if(user) {
        this.props.loginUser(user);
      }
    });
  };
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Welcome to Build 002</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  Main
                </Link>
              </li>
              <li>
                <Link to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/mypage">
                  MyPage
                </Link>
              </li>
              <li>
                <Link to="/trip">
                  Trip
                </Link>
              </li>
              <li>
                <Link to="/library">
                  library
                </Link>
              </li>
              <li>
                <Link to="/scrap">
                  scrap
                </Link>
              </li>
              <li>
                <Link to="/scrap-demo">
                  scrap-demo
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/mypage" component={MyPage} />
            <Route exact path="/trip" component={Trip} /> 
            <Route exact path="/trip/:tripKey" component={TripDetail} />
            <Route path="/scrap" component={Scrap} />
            <Route path="/scrap-demo" component={ScrapDemo} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
  logoutUser: () => dispatch(logoutUser()),
  checkAuthStateChanged: (callback) => dispatch(checkAuthStateChanged(callback))
}))(App);
