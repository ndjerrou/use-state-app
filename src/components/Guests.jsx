import { useState } from "react";
import axios from "axios";

export default function Guests() {
  // const [guests, setGuests] = useState([]);
  // const [guest, setGuest] = useState("");

  // const handleChange = (e) => {
  //   console.log(e.target.value);

  //   setGuest(e.target.value);
  // };

  // const handleClick = (e) => {
  //   // ???? valeur de mon input ????

  //   const newGuests = [...guests, guest];

  //   setGuests(newGuests);

  //   setGuest("");
  // };
  // let todos = [];
  const [todos, setTodos] = useState([]);

  const handleClick = async (e) => {
    const url = "https://jsonplaceholder.typicode.com/todos";

    const { data } = await axios(url);

    setTodos(data);
  };

  const handleClear = (e) => {
    setTodos([]);
  };

  return (
    <div>
      {/* <input value={guest} onChange={handleChange} placeholder="Votre prénom" /> */}

      <button onClick={handleClick}>Get Todos</button>
      <button onClick={handleClear}>Clear Todos</button>

      <div>
        <h1>Ce que je dois faire ... </h1>
        <ul>
          {todos.length > 0 &&
            todos.map(({ id, title }) => <li key={id}>{title}</li>)}
        </ul>
      </div>
    </div>
  );
}
