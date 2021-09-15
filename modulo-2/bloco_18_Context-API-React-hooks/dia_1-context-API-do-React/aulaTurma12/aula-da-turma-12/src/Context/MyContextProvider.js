import MyContext from "./context";
import React from "react";

class Provider extends React.Component{
  constructor(props) {
    super(props);

    this.state = { movies: [] };
  }

  addMovie = (movie) => {
    const { movies } = this.state;
    const newMovies = [...movies, movie];
    this.setState = ({ movies: newMovies });
  }
  render(){
    const moviesStore = {...this.state, add: this.addMovie}
    const { children } = this.props;
    console.log(this.props);
    return(
      <MyContext.Provider value={moviesStore}>
        { children }
      </MyContext.Provider>
    );
  }
}

export default Provider