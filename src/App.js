import { useEffect, useState } from "react";

function reducer(prevValue, curValue) {
  return prevValue + curValue.rating
}

function Rating({ classId }) {
  var [rating, setRating] = useState([])

  useEffect(function() {
    fetch(`http://localhost:4000/api/v1/classes/${classId}/ratings`)
      .then(res => res.json())
      .then(data => {
        var total = data.reduce(reducer, 0)
        var average = (total / data.length)
        average = isNaN(average) ? 0 : Number(average)
        setRating(Math.round(average))
      })
  }, [])

  return <p>{new Array(rating).fill("").map(() => <span>⭐</span>)}</p>
}

function App() {
  var [content, setContent] = useState([])

  useEffect(function() {
    // fetch alle hold
    fetch("http://localhost:4000/api/v1/classes")
      .then(res => res.json())
      .then(data => setContent(data))
  }, [])

  return (
    <>
      <h1>Hold</h1>
      {content.map(element => (
        <article>
          <h2>{element.className}</h2>
          <Rating classId={element.id} />
        </article>
      ))}
    </>
  )
}

export default App;
