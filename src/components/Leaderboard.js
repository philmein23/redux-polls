import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Leaderboard extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(user => (
            <li className="user">
              <img src={user.avatarURL} />
              <div>
                <h1>{user.name}</h1>
                <p>{user.polls.length} Polls</p>
                <p>{user.answers.length} Answers</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Leaderboard);

function mapStateToProps({ users }) {
  const usersList = Object.keys(users).map(userId => users[userId]);
  return {
    users: usersList
  };
}
