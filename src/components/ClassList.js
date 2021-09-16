import { useEffect, useState, useContext } from "react";
import Store from "../Store";

export default function ClassList() {
  var [content, setContent] = useState([])
	var {setCartContent} = useContext(Store)

  useEffect(function() {
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
          <button onClick={() => setCartContent([element])}>Læg i kurv</button>
        </article>
      ))}
    </>
  )
}
