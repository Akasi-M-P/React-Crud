import { Component } from "react";
import "./App.css";
import Users from "./Components/Users";

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
        }
        
      ],
    };
  }
  render() {
    return (
      <>
        <div className="Container">
          <div className="Row">
            <div className="Form-col">Form</div>
            <div className="User-col">
              <Users usersData={this.state.users}/>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
