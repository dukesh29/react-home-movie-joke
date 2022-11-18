import React, {useEffect, useState} from 'react';
import './JokeCard.css';
import JokeCardBtn from "../JokeCardBtn/JokeCardBtn";

let url = 'https://api.chucknorris.io/jokes/random';

const JokeCard = () => {

  const [joke, setJoke] = useState('');

  const fetchData = async () => {
    const response = await fetch(url);
    if (response.ok) {
      const allJokes = await response.json();
      const joke = allJokes.value;
      setJoke(joke);
    }
  };

  useEffect(() => {
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="jokeCard">
      <JokeCardBtn onClick={fetchData}/>
      <p style={{ textAlign:'center'}}>{joke}</p>
    </div>
  );
};

export default JokeCard;