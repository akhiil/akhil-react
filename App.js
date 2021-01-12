import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import phone from "./screens/phone.js";
import otp from "./screens/otp.js";
import main from "./screens/main";
import Header from "./components/header";

const AppRouter =()=>{
    return(
       <BrowserRouter>
       <Header />
       <Switch>
       <Route path="/" component={phone} exact/>
           <Route path="/otp" component={otp} exact/>
       </Switch>
       </BrowserRouter>
    )
}
export default AppRouter;