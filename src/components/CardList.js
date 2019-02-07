import React from "react";
import Card from "./Card";

const CardList = props => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        flexWrap: "wrap"
      }}
    >
      {props.cards.map((card, key) => (
        <Card key={key} handleRemove={props.handleRemove} {...card} />
      ))}
    </div>
  );
};

export default CardList;
