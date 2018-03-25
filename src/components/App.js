import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import { handleInitialData } from "../actions/shared";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;

    return (
      // <div className="container">
      //   <Navbar />
      //   {loading ? (
      //     <h1>Loading..</h1>
      //   ) : (
      //     <div>
      //       <Dashboard />
      //     </div>
      //   )}
      // </div>
      <Fragment>
        <Router>
          <div className="container">
            <Navbar />
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route
                  render={() => <h1 className="text-center">404 Error</h1>}
                />
              </Switch>
            )}
          </div>
        </Router>
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);
