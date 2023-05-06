import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Users from "./Components/Users";
import AddUserForm from "./Components/AddUserForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Gideon Oseini",
          role: "PHP Developer",
          email: "gideon@email.com",
          gen: 24,
          id: "asdnss5243",
        },
        {
          name: "King Robert",
          role: "React Developer",
          email: "king@email.com",
          gen: 20,
          id: "as526283",
        },
        {
          name: "Phyllis Mansah",
          role: "Frontend Developer",
          email: "phyllis@email.com",
          gen: 15,
          id: "gsva415162",
        },
      ],
    };
  }

  addNewUser = (user) => {
    user.id = Math.random().toString;
    this.setState({
      users: [...this.state.users, user],
    });
  };

  deleteUser = (id) => {
    const undeletedUsers = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: undeletedUsers,
    });
  };

  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map((user) =>
        user.id === id ? updatedUser : user
      ),
    });
  };

  render() {
    return (
      <>
        <div className="Container">
          <div className="Row">
            <AddUserForm addUser={this.addNewUser} />
          </div>
          <div className="Row">
            <Users
              usersData={this.state.users}
              deleteUser={this.deleteUser}
              editUser={this.editUser}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
