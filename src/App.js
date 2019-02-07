import React, { useState } from "react";
import Form from "./components/Form";
import CardList from "./components/CardList";
import "./App.css";

const App = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo));
  };

  const removeCard = key => {
    cards.filter(card => {
      return !card.key === key;
    });
  };

  return (
    <div className="App">
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} handleRemove={removeCard} />
    </div>
  );
};

export default App;
