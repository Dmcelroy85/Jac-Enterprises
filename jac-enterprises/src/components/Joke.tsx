import React, {useEffect, useState} from "react";
import Button from "./Button";

type data = {
  setup: string
  punchline: string
}

function Joke() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, []) 

  return (
    <div className="row">
        <div className="row">Joke: {data.setup}</div>
        <div className="row">Punchline: {data.punchline}</div>
        <Button callApi={fetchApi} />
    </div>
  );
}
  
// import Button from "./Button";
 
// const Joke = () => {
//     const [Joke, setJoke] = React.useState("");
 
//     const fetchApi = () => {
//         fetch("https://official-joke-api.appspot.com/jokes/general/random")
//             .then((res) => res.json())
//             .then((data) => setJoke(data.joke));
//     };


//     return (
        
//         <div className="container text-dark bg-warning">
//             <p>Joke: { Joke }</p> 
            
              
//         </div>
//     );
// }
 
export default Joke;