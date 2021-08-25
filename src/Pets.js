import React, { Component } from "react";

export class Pets extends Component {
  render() {
    return (
      <div className="Pets">
        <header className="PetsHeader">
          <h1>Pets.com</h1>
          <h3>Home</h3>
          <h3>Pets</h3>
          <h3>About Us</h3>
        </header>

        <body className="PetsBody">
          <p>What kind of pet are you looking for?</p>

          <button className="CatsButton">Cats</button>
          <button className="DogsButton">Dogs</button>
        </body>
      </div>
    );
  }
}

export default Pets;
