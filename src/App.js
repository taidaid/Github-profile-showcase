import React, { useState } from "react";
import Form from "./components/Form";
import CardList from "./components/CardList";
import "./App.css";
/*
TODO
====
center the input field and display the hoverCard in a div above the input
onSubmit should add card to "showcase" below input

*/
const App = () => {
  const [cards, setCards] = useState([]);

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo));
  };

  const hoverCard = cardInfo => {
    // TODO
    // open modal that shows card
  };

  const removeCard = key => {
    const index = cards.findIndex(card => card.login === key);
    if (index !== -1) cards.splice(index, 1);
    setCards(cards);
  };

  return (
    <div className="App">
      <Form onSubmit={addNewCard} onEntry={hoverCard} />
      <CardList cards={cards} handleRemove={removeCard} />
    </div>
  );
};

export default App;
