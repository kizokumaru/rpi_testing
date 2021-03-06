import React, { useState, useEffect } from "react";


export default function App() {
  //const [list, setList] = useState(false);
  //const [card, setCard] = useState(false);
  //const [player, setPlayer] = useState({});
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/fotos')
      .then((response) => response.json())
      .then((responseJson) => {
        const imgsrc = responseJson.data.map((image) => {
          return <ImageCard key={image._id} image={image} />;
        })
        setFotos(imgsrc);
        console.log(responseJson.data)
      });
  }, []);

  
  return (
    <div className="image-list">{fotos}</div >
  )
}


class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spans:0};
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans: spans});
  }
  render() {
    const { name, path } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={path} alt={name} />
      </div>
    );
  }
}


/*let showCard = (id) => {

    fetch(`http://localhost:3001/fotos/${id}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setPlayer(responseJson.data);
        setList(false);
        setCard(true);
        setTable(false);
      });

  };

  let showList = () => {
    setCard(false);
    setList(true);
    setCard(false);
    setTable(false);
  };*/

/*{list ? (
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

      */
