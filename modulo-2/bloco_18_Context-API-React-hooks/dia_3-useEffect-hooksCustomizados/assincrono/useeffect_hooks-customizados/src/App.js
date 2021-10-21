import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ pokemons, setPokemos ] = useState([]);
  const [ limit, setLimit ] = useState(10);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

  //COmponentDidMount
 useEffect(async () => {
   // DidMonth - Quando monta - fica aqui na parte de cima
   const { results } = await fetch(url).then((response) => response.json());
   setPokemos(results);

   // DidWillAumont - Quando desmonda - deve ficar dentro do retorno
   return () => {console.log('foi')}

  //DidUptade dentro das [] - quando esse valor atualiza.
 }, [limit]);

 const handleMorePokemon = () => {
   setLimit(limit + 10);
 }

  return (
    <div className="App">
      <h1>Ola mundo</h1>
      <button type="button" onClick={handleMorePokemon}>Buscar mais pokemons</button>
      <ul>
        {
          pokemons.map(item=> <li key={item.name}>{item.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
