import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Leaderboard from "./Leaderboard";
import AddNewPoll from "./AddNewPoll";
import Poll from "./Poll";
import { handleInitialData } from "../actions/shared";
import { LoadingBar } from "react-redux-loading";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;
    return (
      <div>
        <LoadingBar className="loading" />

        <Router>
          <div className="container">
            <Navbar />
            {loading ? null : (
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/poll/:pollId" component={Poll} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/addpoll" component={AddNewPoll} />
                <Route
                  render={() => <h1 className="text-center">404 Error</h1>}
                />
              </Switch>
            )}
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
