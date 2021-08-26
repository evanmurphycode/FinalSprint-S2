import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cats, setCats] = useState([]);
  const key = "2abd08c8-0f79-4f1e-b5a3-c25e5ae82a50";

  function Home() {
    return (
      <div>
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
      </div>
    );
  }

  function Card(props) {
    return (
      <div className="Card">
        <h2 className="CartTitle">{props.title}</h2>
        <p className="CardContent">{props.description}</p>
      </div>
    );
  }

  function Dogs() {
    return (
      <div>
        <h3>Dogs</h3>
      </div>
    );
  }

  const CatList = async () => {
    let response = await axios.get(`https://api.thecatapi.com/v1/breeds/`, {
      headers: {
        "x-api-key": key,
        "access-control-allow-origin": "*",
        "Content-type": "application/json",
      },
    });

    let cats_array = await response.data;
    let cats_cards = [];

    console.log(response.data[0]);
    setCats(cats_array);
    return;
  };

  function Pets() {
    return (
      <div>
        <p>What kind of pet are you looking for?</p>

        <button onClick={CatList} className="CatsButton">
          Cats
        </button>
        <button onClick={Dogs} className="DogsButton">
          Dogs
        </button>

        <div>
          {cats.length > 0 &&
            cats.map((cat) => {
              return (
                <Card title={cat.name} description={cat.description}></Card>
              );
            })}
        </div>

        <footer className="Footer">
          <h6>Footer</h6>
        </footer>
      </div>
    );
  }

  function AboutUs() {
    return (
      <div>
        <p>
          Hello, we are Chris Lynch, Evan Murphy and Erin Slaney. We are
          Software Development students and for our final project in semester
          two we have decided to create an Pet directory app. We decided to do
          this app because when someone is looking to adopt a pet, it would be a
          good idea to have all of the important information about the type of
          pet, the temperament, life expectancy, etc.
        </p>

        <footer className="Footer">
          <h6>Footer</h6>
        </footer>
      </div>
    );
  }

  return (
    <Router>
      <h1>Pets.com</h1>
      <nav className="NavigationBar">
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
