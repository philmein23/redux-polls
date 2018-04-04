import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSavePollAnswer } from "../actions/polls";

class Poll extends Component {
  state = {
    hasAnswered: false
  };

  getTotal = key => {
    const { poll } = this.props;

    const totalVotes =
      poll.aVotes.length +
      poll.bVotes.length +
      poll.cVotes.length +
      poll.dVotes.length;

    const percentage = Math.floor(
      poll[`${key}Votes`].length / totalVotes * 100
    );

    return percentage;
  };

  selectAnswer = answer => {
    const { poll, authedUser, vote } = this.props;

    if (vote) return;

    this.props.dispatch(
      handleSavePollAnswer({ authedUser, id: poll.id, answer })
    );

    this.setState({ hasAnswered: true });
  };

  render() {
    const { poll, userAvatar, vote } = this.props;

    console.log("props", this.props);

    if (this.props.poll === null) {
      return <p>No poll exists</p>;
    }

    return (
      <div className="poll-container">
        <h1 className="question">{poll.question}</h1>
        <div className="poll-author">
          By <img alt={`${poll.author}'s Avatar`} src={userAvatar} />
        </div>
        <ul>
          {["aText", "bText", "cText", "dText"].map(key => (
            <li
              key={key}
              onClick={() => this.selectAnswer(key[0])}
              className={`option ${vote === key[0] ? "chosen" : ""}`}
            >
              <div className="result">
                <span>{poll[key]}</span>
                {vote && (
                  <span>
                    {this.getTotal(key[0])}% ({poll[`${key[0]}Votes`].length})
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, polls, users }, { match }) {
  const { pollId } = match.params;

  const poll = polls[pollId];

  if (!poll) {
    return {
      poll: null
    };
  }

  const vote = ["aVotes", "bVotes", "cVotes", "dVotes"].reduce((vote, key) => {
    if (vote !== null) {
      return vote[0];
    }

    return poll[key].includes(authedUser) ? key : vote;
  }, null);

  return {
    poll,
    vote,
    authedUser,
    userAvatar: users[poll.author].avatarURL
  };
}

export default connect(mapStateToProps)(Poll);
