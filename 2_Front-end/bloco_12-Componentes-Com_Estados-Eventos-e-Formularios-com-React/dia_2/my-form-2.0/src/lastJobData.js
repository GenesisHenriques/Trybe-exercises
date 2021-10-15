import React from 'react'

export default class lastJobData extends React.Component {
constructor() {
  super()
  this.state = {
    cargo: '',
    alert: '',
  };
};

genesis = () => {
  if (this.state.alert === '') {
    alert('foi');
    this.setState({alert: 'Preencha com cuidado esta informação.'});
  };
};

  render() {
    return(
      <form>
        <fieldset>
          <label htmlFor="resumeSummary">
            Resumo do Currículo: 
            <input type="textArea" id="resumeSummary" maxLength="1000" required/>
          </label>

          <label htmlFor="office">
            Cargo:
            <input type="text" maxLength="40" id="office" required onMouseEnter={this.genesis}/>
          </label>

          <label htmlFor="jobDescription">
            Descrição do cargo:
            <input type="textArea" id="jobDescription" maxLength="500" required />
          </label>
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
    );
  };
};