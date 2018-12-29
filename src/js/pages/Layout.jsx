import React, { Component } from "react";
import "bulma/css/bulma";

export default class Layout extends Component {
  render() {
    return(
      <div className="section is-paddingless">
        <div className="hero has-background-dark is-full-width">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-white">Keep the change</h1>
              <h2 className="subtitle has-text-white">Ya filthy animal</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
