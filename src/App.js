import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Pets() {
  return (
    <div>
      <h3>Pets</h3>
    </div>
  );
}

function AboutUs() {
  return (
    <div>
      <h3>About Us</h3>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/pets">Pets</Link>
        <Link to="/about">About Us</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/pets" component={Pets}></Route>
        <Route exact path="/about" component={AboutUs}></Route>
      </Switch>
    </Router>
  );
}

export default App;
