import React, { Component } from "react";
import MyContext from "../Context/context";

export default class Movies extends Component {
  render() {
    return (
      <ul>
        <MyContext.Consumer>
          {
            value => value.movies.map(({name}) => <li>{name}</li>)
          }
        </MyContext.Consumer>
      </ul>
    );
  }
}