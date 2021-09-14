import { useState, useEffect } from "react"

function App() {
  var [content, setContent] = useState([{
    name: "loading..."
  }])

  var [getMore, setGetMore] = useState(0)

  useEffect(function() {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${getMore}&limit=10`)
      .then(res => res.json())
      .then(data => setContent(data.results))
      console.log(content)
  }, [getMore])

  return (
    <>
      <h1>Pokemons</h1>
      {content.map(element => <p>{element.name}</p>)}
      <button onClick={() => setGetMore(getMore === 0 ? 0 : getMore - 10)}>Prev</button>
      <button onClick={() => setGetMore(getMore + 10)}>Next</button>
    </>
  )
}

export default App;
