import React,{ Component } from "react";
import { Link } from "react-router-dom";
import MyContext from "../Context/context";

export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
    }
  }

  handleChange = ({ target: {name, value} }) => {
    this.setState({ [name]: value })
  }

  handleAddMovies = () => {
    const { add } = this.context;
    add({...this.state});
  }

  render() {
    console.log(this.context);
    return (
      <>
        <form>
          <label>
            Nome:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <label>
            Categoria:
            <input type="text" name="category" onChange={this.handleChange} />
          </label>
          <button onClick={ this.handleAddMovies } type="button">Adicionar filme</button>
          <Link to="/filmes" >Filmes Adicionados</Link>
        </form>
      </>
    );
  }
}

AddMovie.contextType = MyContext;