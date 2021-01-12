const axios = require("axios");

export async function sendOtp(phoneNumber) {
  axios
    .post("https://staging.fastor.in:8090/v1/pwa/user/register", {
      phone: phoneNumber,
      dial_code: "+91",
    })
    .then(function (response) {
      console.log("send otp ka",response.data);
      if(response.data.status === 'Failed') {
        alert(response.data.error_message)
        return;
      }
    })
    .catch(function (error) {
      console.log("sendotp ka error",error);
    });
}
export function loginWithOtp(phoneNumber, otp) {
  axios
    .post("https://staging.fastor.in:8090/v1/pwa/user/login", {
      phone: phoneNumber,
      otp: otp,
      dial_code: "+91",
    })
    .then(function (response) {
      console.log(response["data"]["data"]);
      localStorage.setItem("user", JSON.stringify(response["data"]["data"]));
    })
    .catch(function (error) {
      console.log(error);
    });
}
export async function getRestaurants() {
  console.log(JSON.parse(localStorage.getItem("user")));
  let config = {
    headers: {
      Authorization:
        "Bearer " + JSON.parse(localStorage.getItem("user"))["token"],
    },
  };
  var response = await axios.get(
    "https://staging.fastor.in:8090/v1/m/restaurant?city_id=118&&",
    config
  );
  return response["data"];
}
