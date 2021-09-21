import { useEffect, useState } from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook"

function PokeCard({id}) {
  var [content, setContent] = useState({})
  var [ref, {entry}] = useIntersectionObserver()
  var isVisible = entry && entry.isIntersecting

  useEffect(function() {
    isVisible && fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => setContent(data))
  }, [id, isVisible])

  return (
    <article ref={ref}>
      <h2>{content.name}</h2>
      <img src={content.sprites?.front_default} loading="lazy" />
    </article>
  )
}

function App() {
  var [content, setContent] = useState([])
  useEffect(function() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then(res => res.json())
      .then(data => setContent(data.results))
  }, [])
  
  return (
    <>
      {content.map(pokemon => <PokeCard key={pokemon.name} id={pokemon.name} />)}
    </>
  )
}

export default App;
