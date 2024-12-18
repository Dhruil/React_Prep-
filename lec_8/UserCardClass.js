import { Component } from "react";

class UserCardClass extends Component {
  constructor(props) {
    super(props);

    console.log("calling child 1 constuctor");
  }
  componentDidMount() {
    console.log("calling componentDidMount of Child")
  }
  render() {
    console.log("calling child render");
    return (
      <div>
        <h2> Name : {this.props.name}</h2>
      </div>
    );
  }
}
export default UserCardClass;
