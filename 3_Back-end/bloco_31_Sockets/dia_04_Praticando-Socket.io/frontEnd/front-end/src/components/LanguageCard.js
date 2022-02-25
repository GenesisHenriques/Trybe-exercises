import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import socket from '../utils/socketClient';

function LanguageCard ({ index, id, name, image, votos }) {
  const [currentVotes, setCurrentVotes] = useState(votos);

  const handleClick = () => {
    socket.emit('increaseVotes', { id, name })
  }

  useEffect(() => {
    socket.on('refreshCurrentVotes', (language) => {
      if (language._id === id) setCurrentVotes(language.votes);
    })
  }, [])

  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Votos: <span data-testid={`current-votes-${index}`}>{currentVotes}</span>
        </Card.Text>
        <Button onClick={handleClick} data-testid={`vote-participant-${index}`}>Votar</Button>
      </Card.Body>
    </Card>
  )
}

export default LanguageCard