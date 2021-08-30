import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cats, setCats] = useState([]);
  const key = "2abd08c8-0f79-4f1e-b5a3-c25e5ae82a50";
  const [dogs, setDogs] = useState([]);
  const dogkey = "ab4c39cc-ca87-4304-ad1f-eaba9d86880f";

  function Home() {
    return (
      <body className="Body">
        <div>
          <p className="HomeP">
            Pets.com’s aim is to blend the joy of pet ownership with an
            informative yet easy to navigate user interface meant to enrich the
            lives of owners and their pets. If properly cared for animals can be
            an endless supply of comfort, support, and entertainment, while at
            the same time teaching adults and children the responsibilities of
            caring for another living creature. - Citation at:
            http://petcyclopedia.com/#sthash.m4SB7mpZ.dpuf
          </p>

          <Link to="/pets">
            <button className="GettingStartedButton">Let's Get Started!</button>
          </Link>
        </div>

        <footer className="Footer">
          <p> Contact Us: info@pets.com</p>
          <p>Address: 644 topsail Road, St. John's, NL A1E 2E3</p>

          <ul>
            <li>
              Pets are humanizing. They remind us we have an obligation and
              responsibility to preserve and nurture and care for all life.”
              James Cromwell, American Actor
            </li>

            <li>
              “A dog is the only thing on earth that loves you more than you
              love yourself.” Josh Billings, American Comedian
            </li>

            <li>
              “Until one has loved an animal, a part of one’s soul remains
              unawakened.” Anatole France, French Poet
            </li>

            <li>
              “Time spent with cats is never wasted.” Sigmund Freud, Austrian
              Psychoanalyst
            </li>

            <li>
              “Pets understand humans better than humans do.” Ruchi Prabhu,
              Indian Author
            </li>
          </ul>
        </footer>
      </body>
    );
  }

  //<img src={props.image} className="CardImage"></img>

  function CatCard(props) {
    return (
      <div className="Card">
        <h2 className="CartTitle">{props.title}</h2>
        <p className="CardContent">Description: {props.description}</p>
        <p className="CardContent">Lifespan: {props.lifespan} years</p>
      </div>
    );
  }

  function DogCard(props) {
    return (
      <div className="Card">
        <h2 className="CartTitle">{props.title}</h2>
        <p className="CardContent">Temperament: {props.temperament}</p>
        <p className="CardContent">Lifespan: {props.lifespan} years</p>
      </div>
    );
  }

  const DogList = async () => {
    let response = await axios.get(`https://api.thedogapi.com/v1/breeds/`, {
      headers: {
        "x-api-key": dogkey,
        "access-control-allow-origin": "*",
        "Content-type": "application/json",
      },
    });

    let dogs_array = await response.data;
    let dog_cards = [];

    //console.log(JSON.stringify(response.data));

    setDogs(dogs_array);

    return;
  };

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

    //console.log(response.data[0]);
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
        <button onClick={DogList} className="DogsButton">
          Dogs
        </button>

        <div>
          {cats.length > 0 &&
            cats.map((cat) => {
              return (
                <CatCard
                  //image={cat.image.url}
                  title={cat.name}
                  description={cat.description}
                  lifespan={cat.life_span}
                ></CatCard>
              );
            })}
        </div>

        <div>
          {dogs.length > 0 &&
            dogs.map((dog) => {
              return (
                <DogCard
                  image={dog.image}
                  title={dog.name}
                  temperament={dog.temperament}
                  lifespan={dog.life_span}
                ></DogCard>
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
        <p className="AboutUsP">
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
      <div className="HeaderGrid">
        <img
          className="PawIcon"
          src="https://image.flaticon.com/icons/png/512/64/64431.png"
          alt="paw"
        ></img>
        <h1 className="Header">Pets.com</h1>
      </div>
      <nav className="NavigationBar">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/pets"> Pets </Link>
          </li>
          <li>
            <Link to="/about"> About Us </Link>
          </li>
        </ul>
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
