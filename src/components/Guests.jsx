import { useState } from "react";

export default function Guests() {
  const [guests, setGuests] = useState([]);
  const [guest, setGuest] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);

    setGuest(e.target.value);
  };

  const handleClick = (e) => {
    // ???? valeur de mon input ????

    const newGuests = [...guests, guest];

    setGuests(newGuests);

    setGuest("");
  };

  return (
    <div>
      <input value={guest} onChange={handleChange} placeholder="Votre prénom" />

      <button onClick={handleClick}>Inscrivez-vous !</button>

      <div>
        <h1>Super soirée monopoly avec : </h1>
        <ul>
          {guests.map((guest) => (
            <li>{guest}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
