import React from "react";
import ReactDOM from "react-dom";
import { loginWithOtp, getRestaurants } from "../components/api";
import List from "./main";




class App extends React.Component {
  state = { otp: "", hide: false, restaurants: [] };

  myChangeHandler = (event) => {
    this.setState({ otp: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.otp === "123456") {
    loginWithOtp(this.props.location.state.phoneNumber, this.state.otp);
    this.setState({hide: true})
    this.getRestaurantsList();
  } else {
    alert("please enter correct otp")
  }
  };
  getRestaurantsList = async (e) => {
    // e.preventDefault();
    getRestaurants().then((rests) => {
      console.log(rests);
      this.setState({ restaurants: rests });
    });
  };
  render() {
    const container = {
      margin: 50,
    };
    const btn = {
      backgroundColor: "lightgray",
      padding: 5,
      textDecoration: "none",
      color: "black",
      borderStyle: "solid",
      borderWidth: 2,
      margin: 10
    };
  
console.log(this.props);
    return (
      <div style={{ backgroundColor: 'lightgray', padding: 5, margin:10}}>
        {this.state.hide ? null: <form style={container} onSubmit={this.handleSubmit}>
                  <h3>Enter your Otp number:</h3>
                  <input
                    style={{ marginRight: 20, height: 30 }}
                    type="text"
                    onChange={this.myChangeHandler}
                  />
                  {/* <a style={btn} href={this.state.path}>
                  submit
                </a> */}
                  <input style={{height:30}} type="submit" />
                </form>}
        {/*<button style={btn} onClick={this.getRestaurantsList}>Get Restaurants</button>*/}
        <div style={{backgroundColor:'lightgray'}}>
        {this.state.restaurants.map((r) => (
          <div>
          
          <List name={r["restaurant_name"]} image={r["cover_image"]} rating={r["rating"].restaurant_avg_rating}/> 
          </div>
          
        ))}
        </div>
      </div>
    );
  }
}

export default App;
