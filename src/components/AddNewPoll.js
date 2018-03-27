import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddPoll } from "../actions/polls";

class AddNewPoll extends Component {
  state = {
    question: "",
    a: "",
    b: "",
    c: "",
    d: ""
  };

  onChangePollOptions = e => {
    if (e.target.name === "question") {
      this.setState({ question: e.target.value });
    }

    if (e.target.name === "a") {
      this.setState({ a: e.target.value });
    }

    if (e.target.name === "b") {
      this.setState({ b: e.target.value });
    }

    if (e.target.name === "c") {
      this.setState({ c: e.target.value });
    }

    if (e.target.name === "d") {
      this.setState({ d: e.target.value });
    }
  };

  submitPoll = e => {
    e.preventDefault();

    const { question, a, b, c, d } = this.state;

    console.log(this.props.dispatch);
    const poll = {
      question,
      a,
      b,
      c,
      d
    };

    this.props.dispatch(handleAddPoll(poll));
  };

  render() {
    const { question, a, b, c, d } = this.state;

    return (
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
        <label for="input">A.</label>
        <input
          className="input"
          name="a"
          type="text"
          value={a}
          onChange={this.onChangePollOptions}
        />
        <label for="input">B.</label>
        <input
          className="input"
          name="b"
          type="text"
          value={b}
          onChange={this.onChangePollOptions}
        />
        <label for="input">C.</label>
        <input
          className="input"
          name="c"
          type="text"
          value={c}
          onChange={this.onChangePollOptions}
        />
        <label for="input">D.</label>
        <input
          className="input"
          name="d"
          type="text"
          value={d}
          onChange={this.onChangePollOptions}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

function mapStateToProps() {}

export default connect(mapStateToProps)(AddNewPoll);
