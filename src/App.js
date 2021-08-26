import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <body className="Body">
        <p>
          Pets.com’s aim is to blend the joy of pet ownership with an
          informative yet easy to navigate user interface meant to enrich the
          lives of owners and their pets. If properly cared for animals can be
          an endless supply of comfort, support, and entertainment, while at the
          same time teaching adults and children the responsibilities of caring
          for another living creature. - Citation at:
          http://petcyclopedia.com/#sthash.m4SB7mpZ.dpuf
        </p>

        <button className="GettingStartedButton">Let's Get Started!</button>

        <footer className="Footer">
          <h6>Footer</h6>
        </footer>
      </body>
    </div>
  );
}

function Pets() {
  return (
    <div>
      <body className="PetsBody">
        <p>What kind of pet are you looking for?</p>

        <button className="CatsButton">Cats</button>
        <button className="DogsButton">Dogs</button>

        <footer className="Footer">
          <h6>Footer</h6>
        </footer>
      </body>
    </div>
  );
}

function AboutUs() {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Hello, we are Chris Lynch, Evan Murphy and Erin Slaney. We are Software
        Development students and for our final project in semester two we have
        decided to create an Pet directory app. We decided to do this app
        because when someone is looking to adopt a pet, it would be a good idea
        to have all of the important information about the type of pet, the
        temperament, life expectancy, etc.
      </p>

      <footer className="Footer">
        <h6>Footer</h6>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <h1>Pets.com</h1>
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
