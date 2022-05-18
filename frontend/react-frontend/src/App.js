import React, { useState, useEffect } from "react";

export default function App() {
  const [list, setList] = useState(false);
  const [card, setCard] = useState(false);
  const [table, setTable] = useState(true);
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({});

  console.log('React app nestor');
  useEffect(() => {
    fetch('http://localhost:3001/fotos')
      .then((response) => response.json())
      .then((responseJson) => {
        setPlayers(responseJson.data);
        console.log(responseJson.data)
      });
  }, []);

  let showCard = (id) => {

    fetch(`http://localhost:3001/fotos/${id}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setPlayer(responseJson.data);
        setList(false);
        setCard(true);
        setCard(false);
      });

  };

  let showList = () => {
    setCard(false);
    setList(true);
    setCard(false);
  };




  return (
    <div className="container">
      {list ? (
        <div className="list-group">
          {players.map((player) => (
            <li
              onClick={() => showCard(player._id)}
              className="list-group-item list-group-item-action"
            >
              {player.name}
            </li>
          ))}
        </div>
      ) : null}

      {card ? (
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <img class="card-img-top" src={player.path} alt="Card"></img>
            <h5 class="card-title">{player.name}</h5>
            <div onClick={() => showList()} class="btn btn-primary">
              Back
            </div>
          </div>
        </div>
      ) : null}
      {table ? (
        <div class="row">
            {players.map((player) => (
              <div class=".col-sm">
            <img src={player.path} alt="Los Angeles" ></img>
          </div>
          ))}
        </div>
      ) : null}
    </div >
  )
}