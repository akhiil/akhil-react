import React from "react";
import ReactDOM from "react-dom";
import { sendOtp } from "../components/api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }

  mySubmitHandler = (event) => {
    this.props.history.push("/main");
  };
  myChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  onSubmitHandler = async (e) => {
    e.preventDefault();
    sendOtp(this.state.username).then(() => {
      this.props.history.push({
        pathname: "/otp",
        state: { phoneNumber: this.state.username },
      });
    });
  };
  render() {
    const container = {
      margin: 50,
    };
    const btn = {
      backgroundColor: "gray",
      padding: 5,
      textDecoration: "none",
      color: "black",
      borderStyle: "solid",
      borderWidth: 2,
    };

    return (
      <div style={{backgroundColor: 'lightgray', padding: 5, margin:10}}>
      <form style={container} onSubmit={this.onSubmitHandler}>
        <h3>Enter your Phone number:</h3>
        <input
          style={{ marginRight: 20, height: 30 }}
          type="text"
          onChange={this.myChangeHandler}
        />
        {/* <a style={btn} href="/otp">
          submit
        </a> */}
        <input style={{height:30}} type="submit" />
      </form>
      </div>
    );
  }
}

export default App;
