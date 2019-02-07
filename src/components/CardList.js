import React from "react";
import Card from "./Card";

const CardList = props => {
  return (
    <div>
      {props.cards.map((card, key) => (
        <Card key={key} removeCard={props.handleRemove} {...card} />
      ))}
    </div>
  );
};

export default CardList;
