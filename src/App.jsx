import { Component } from "react";
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
        },
        {
          name: "King Robert",
          role: "React Developer",
          email: "king@email.com",
          gen: 20,
        },
        {
          name: "Phyllis Mansah",
          role: "Frontend Developer",
          email: "phyllis@email.com",
          gen: 15,
        },
        {
          name: "Gabriel Gokah",
          role: "Javascript Developer",
          email: "gabriel@email.com",
          gen: 21,
        },
      ],
    };
  }

  addNewUser = (user) => {
    this.setState({
      users: [...this.state.users, user],
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
            <Users usersData={this.state.users} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
