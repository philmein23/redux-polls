import React, { Component } from "react";
import { connect } from "react-redux";

class Poll extends Component {
  getTotal = length => {
    const { question } = this.props.location.state;

    const totalVotes =
      question.aVotes.length +
      question.bVotes.length +
      question.cVotes.length +
      question.dVotes.length;

    const percentage = length / totalVotes * 100;

    return percentage;
  };

  render() {
    if (this.props.location.state) {
      const { question, hasAnswered } = this.props.location.state;
      const userId = question.author;
      const userAvatarURL = this.props.users[userId].avatarURL;

      return (
        <div className="poll-container">
          <h1 className="question">{question.question}</h1>
          <div className="poll-author">
            By <img alt={`${userId}'s Avatar`} src={userAvatarURL} />
          </div>
          <ul>
            <li
              className={
                question.aVotes.includes(this.props.authedUser)
                  ? "option chosen"
                  : "option"
              }
            >
              <div className="result">
                <span> {question.aText}</span>
                {hasAnswered && (
                  <span>
                    {this.getTotal(question.aVotes.length)}% ({
                      question.aVotes.length
                    })
                  </span>
                )}
              </div>
            </li>
            <li
              className={
                question.bVotes.includes(this.props.authedUser)
                  ? "option chosen"
                  : "option"
              }
            >
              <div className="result">
                <span> {question.bText}</span>
                {hasAnswered && (
                  <span>
                    {this.getTotal(question.bVotes.length)}% ({
                      question.bVotes.length
                    })
                  </span>
                )}
              </div>
            </li>
            <li
              className={
                question.cVotes.includes(this.props.authedUser)
                  ? "option chosen"
                  : "option"
              }
            >
              <div className="result">
                <span> {question.cText}</span>
                {hasAnswered && (
                  <span>
                    {this.getTotal(question.cVotes.length)}% ({
                      question.cVotes.length
                    })
                  </span>
                )}
              </div>
            </li>
            <li
              className={
                question.dVotes.includes(this.props.authedUser)
                  ? "option chosen"
                  : "option"
              }
            >
              <div className="result">
                <span> {question.dText}</span>
                {hasAnswered && (
                  <span>
                    {this.getTotal(question.dVotes.length)}% ({
                      question.dVotes.length
                    })
                  </span>
                )}
              </div>
            </li>
          </ul>
        </div>
      );
    }

    return null;
  }
}

function mapStateToProps({ authedUser, polls, users }) {
  return {
    polls,
    authedUser,
    users
  };
}

export default connect(mapStateToProps)(Poll);
