/* eslint-disable react/prop-types */
import { Component } from "react";

export default class AddUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      role: "",
      gen: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });

    console.log(this.state);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      name: "",
      email: "",
      role: "",
      gen: "",
    });
  };

  render() {
    return (
      <div>
        <div className="login">
          <h1 className="User-head">Add Users</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required="required"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required="required"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <input
              type="text"
              name="role"
              placeholder="Role"
              required="required"
              onChange={this.handleChange}
              value={this.state.role}
            />
            <input
              type="number"
              name="gen"
              placeholder="Gen"
              required="required"
              onChange={this.handleChange}
              value={this.state.gen}
            />
            <button
              type="submit"
              className="btn btn-primary btn-block btn-large"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
