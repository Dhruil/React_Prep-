import React from "react";
import ReactDOM from "react-dom";
import { Comment } from "domelementtype";
import UserCardClass from "./UserCardClass";
// if We use Up import then only write extends Component
import UserCardClass from "./UserCardClass";
class UserClass extends React.Component {
  constructor(props) {
    super(props); // assigning the props to the component and for use in entire this class component we need to use super(props);
    this.state = {
      //initialise the useState() hook in class component  ---this use to access this variable of state entire class
      name: "Dhruil",
    };
    //we metiond this useStete in this because we need to initialise the hook at first before render the component  hence we need to call in constructor;

    console.log("calling a parent constructor");
  };
  componentDidMount(){
    console.log("componentDidMount - parent")
  }

  render() {
    console.log("rendering parent");
    return (
      <div>
        <h1>User Class</h1>
        <UserCardClass name={this.state.name}/>
      </div>
    );
  }
}
export default UserClass;


