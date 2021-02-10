import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import LoginPage from "./Pages/Login"
import DashBoard from "./Pages/DashBoard"
function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route  path="/dashboard" component={DashBoard} />
       </Switch>
      </Router>

  );
}

export default App;
