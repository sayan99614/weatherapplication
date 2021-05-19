import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import Weather from "./components/Weather";
import Location from "./components/Location";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/weather' component={Weather} />
        <Route exact path='/location' component={Location} />
      </Switch>
    </>
  );
}

export default App;
