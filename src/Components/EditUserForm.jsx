/* eslint-disable react/prop-types */
import { Component } from "react";
import { connect } from "react-redux";
import { editUser } from "../Components/actions";

class EditUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.userInfo.name,
      email: props.userInfo.email,
      role: props.userInfo.role,
      gen: props.userInfo.gen,
      id: props.userInfo.id,
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.editUser(this.state.id, this.state);
  //   this.setState({
  //     name: "",
  //     email: "",
  //     role: "",
  //     gen: "",
  //   });
  //   this.props.closeModal();
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editUser(this.state.id, this.state);
    this.setState({
      name: "",
      email: "",
      role: "",
      gen: "",
    });
    this.props.closeModal();
  };

  render() {
    return (
      <div>
        <div className="edit-form">
          <div className="login">
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
      </div>
    );
  }
}

// eslint-disable-next-line react-refresh/only-export-components
export default connect(null, { editUser })(EditUserForm);