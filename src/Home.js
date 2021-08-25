import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="Header">
          <h1>Pets.com</h1>
        </header>

        <nav className="Navigation">
          <h3>Home</h3>
          <h3>Pets</h3>
          <h3>About Us</h3>
        </nav>

        <body className="Body">
          <p>
            Pets.com’s aim is to blend the joy of pet ownership with an
            informative yet easy to navigate user interface meant to enrich the
            lives of owners and their pets. If properly cared for animals can be
            an endless supply of comfort, support, and entertainment, while at
            the same time teaching adults and children the responsibilities of
            caring for another living creature. - Citation at:
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
}

export default Home;
