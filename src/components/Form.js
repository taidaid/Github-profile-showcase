import React from "react";
import axios from "axios";

const { useState } = React;
const Form = props => {
  const [username, setUsername] = useState("");

  const handleEntry = e => {
    e.preventDefault();
    setUsername(e.target.value);
    axios
      .get(`https://api.github.com/users/${username}`)
      .then(resp => {
        props.onEntry(resp.data);
      })
      .catch(err => {
        // alert("User Not Found");
        console.log(err);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setUsername(e.target.value);
    axios
      .get(`https://api.github.com/users/${username}`)
      .then(resp => {
        props.onSubmit(resp.data);
        setUsername("");
      })
      .catch(err => {
        // alert("User Not Found");
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={e => handleEntry(e)}
        placeholder="GitHub username"
        required
      />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default Form;
