import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddPoll } from "../actions/polls";
import { Redirect } from "react-router-dom";

class AddNewPoll extends Component {
  state = {
    question: "",
    a: "",
    b: "",
    c: "",
    d: "",
    canRedirect: false
  };

  onChangePollOptions = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  };

  isDisabled = () => {
    const { answer, a, b, c, d } = this.state;

    return answer === "" || a === "" || b === "" || c === "" || d === "";
  };

  submitPoll = e => {
    e.preventDefault();

    const { question, a, b, c, d } = this.state;

    const poll = {
      question,
      a,
      b,
      c,
      d
    };

    this.props.dispatch(handleAddPoll(poll));

    this.setState({ canRedirect: true });
  };

  render() {
    const { question, a, b, c, d, canRedirect } = this.state;

    return (
      <div>
        {canRedirect ? (
          <Redirect to="/" />
        ) : (
          <form className="add-form" onSubmit={this.submitPoll}>
            <h3>What is your question?</h3>
            <input
              className="input"
              name="question"
              type="text"
              value={question}
              onChange={this.onChangePollOptions}
            />

            <h3>What are the options?</h3>
            <label htmlFor="input">A.</label>
            <input
              className="input"
              name="a"
              type="text"
              value={a}
              onChange={this.onChangePollOptions}
            />
            <label htmlFor="input">B.</label>
            <input
              className="input"
              name="b"
              type="text"
              value={b}
              onChange={this.onChangePollOptions}
            />
            <label htmlFor="input">C.</label>
            <input
              className="input"
              name="c"
              type="text"
              value={c}
              onChange={this.onChangePollOptions}
            />
            <label htmlFor="input">D.</label>
            <input
              className="input"
              name="d"
              type="text"
              value={d}
              onChange={this.onChangePollOptions}
            />
            <button disabled={this.isDisabled()} className="btn" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(AddNewPoll);
