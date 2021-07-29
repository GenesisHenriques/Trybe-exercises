import React from 'react';

export default class personalData extends React.Component {
constructor() {
  super()
  this.state = {
    endereco: "",
    city: "",
  }
}

handleAddress = ({ target }) => {
  const str = target.value;
  this.setState({endereco: str.replace(/[^\w\p{l}\s,-]/g, "")})
}

handleCity = ({ target }) => {
  const str = target.value;
  if (str.length > 0 && str[0].match(/[0-9]/)) {
    this.setState({city: ''});
  }
}

render() {
  return(
    <form>
      <fieldset>
        <label htmlFor="name">
          Nome:
          <input name="name" type="name" id="name" required maxLength="30" />
        </label>

        <label html="email">
          Email:
          <input name="email" type="email" id="email" maxLength="50" required/>
        </label>

        <label htmlFor="cpf">
          CPF:
          <input type="text" required id="cpf" maxLength="11" placeholder="12345678910" />
        </label>

        <label htmlFor="endereco">
          Endereço:
          <input type="textArea" maxLength="200" id="endereco" value={this.state.endereco} required onChange={this.handleAddress}/>
        </label>

        <label htmlFor="cidade">{/*Verificar se o nome da cidade começa com número. Caso comece, limpar o campo*/}
          Cidade:
          <input type="text" maxLength="28" id="cidade" required onBlur={this.handleCity}/>
        </label>

        <label htmlFor="estado">
          Estado:
          <select id="estado" required>
            <option value="MinasGerais">Minas Gerais</option>
            <option value="RioDeJaneiro">Rio de Janeiro</option>
            <option value="SaoPaulo">São Paulo</option>
            <option value="Bahia">Bahia</option>
          </select>
        </label>

        <label>
          Moradia:
          <div>
            <input name="radioButton" type="radio" value="option1"/>Casa
            <input name="radioButton" type="radio" value="option2"/>Apartamento
            <input name="radioButton" type="radio" value="option3"/>Outro
          </div>
        </label>
      </fieldset>
    </form>
  );
};
}