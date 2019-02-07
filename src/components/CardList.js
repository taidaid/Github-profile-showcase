import React from "react";
import Card from "./Card";

const CardList = props => {
  return (
    <div>
      {props.cards.map((card, key) => (
        <Card key={key} handleRemove={props.handleRemove} {...card} />
      ))}
    </div>
  );
};

export default CardList;
