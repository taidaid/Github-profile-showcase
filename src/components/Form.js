import React from "react";
import axios from "axios";

const { useState } = React;
const Form = props => {
  const [username, setUsername] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${username}`)
      .then(resp => {
        props.onSubmit(resp.data);
        setUsername("");
      })
      .catch(err => {
        alert("User Not Found");
        console.log(err);
        setUsername("");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="GitHub username"
        required
      />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default Form;
