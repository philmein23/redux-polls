import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Dashboard extends Component {
  state = {
    hasAnswered: false,
    showTest: false
  };

  toggle = (hasAnswered = false) => {
    this.setState({
      hasAnswered: hasAnswered
    });
  };

  render() {
    const { hasAnswered } = this.state;
    return (
      <div>
        <div className="dashboard-toggle">
          <button
            style={!hasAnswered ? { textDecoration: "underline" } : null}
            onClick={() => this.toggle(false)}
          >
            Unanswered
          </button>
          <span> | </span>
          <button
            style={hasAnswered ? { textDecoration: "underline" } : null}
            onClick={() => this.toggle(true)}
          >
            Answered
          </button>
        </div>
        <ul className="dashboard-list">
          {hasAnswered
            ? this.props.answered.map(answered => {
                return (
                  <li key={answered.id}>
                    <Link
                      to={{
                        pathname: `/poll/${answered.id}`,
                        state: { question: answered, hasAnswered: true }
                      }}
                    >
                      {answered.question}
                    </Link>
                  </li>
                );
              })
            : this.props.unanswered.map(unanswered => {
                return (
                  <li key={unanswered.id}>
                    <Link
                      to={{
                        pathname: `/poll/${unanswered.id}`,
                        state: { question: unanswered, hasAnswered: false }
                      }}
                    >
                      {unanswered.question}
                    </Link>
                  </li>
                );
              })}
        </ul>
        <div />
      </div>
    );
  }
}

function mapStateToProps({ authedUser, polls, users }) {
  const answers = users[authedUser].answers;

  const answered = answers
    .map(id => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  const unanswered = Object.keys(polls)
    .filter(pollId => !answers.includes(pollId))
    .map(id => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    answered,
    unanswered,
    users
  };
}

export default connect(mapStateToProps)(Dashboard);
