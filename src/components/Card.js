import React from "react";

const Card = props => {
  const id = props.login;
  const handleRemove = () => {
    props.handleRemove(id);
  };

  return (
    <div style={{ margin: "1em" }}>
      <div>
        <img alt="avatar" style={{ width: "70px" }} src={props.avatar_url} />
        <div onClick={handleRemove}>X</div>
      </div>

      <div>
        <div style={{ fontWeight: "bold" }}>{props.name}</div>
        <div>{props.html_url}</div>
        <div>{props.blog}</div>
      </div>
    </div>
  );
};

export default Card;
