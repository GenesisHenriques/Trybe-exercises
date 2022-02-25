import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap'
import LanguageCard from '../components/LanguageCard';

function Home () {

const [languages, setLanguages] = useState([]);
const [isLoading, setIsLoading] = useState(false);

  useEffect ( () => {
    fetch('http://localhost:3002/languages')
    .then((response) => response.json())
    .then((lan) => {
      console.log(lan);
      setLanguages(lan)
    })
  }, []);

  return (
    <div>
      <h1>Escolha sua linguagem preferida</h1>

      {
        isLoading ? <p>Carregando...</p>
        : (
          <CardGroup>
            {languages.map(({ _id, name, image, votos }, index) => (
              <LanguageCard
                key={_id}
                index={index}
                id={_id}
                name={name}
                image={image}
                votos={votos}
              />
            ))}
          </CardGroup>
        )
      }
    </div>
  )
}
export default Home;