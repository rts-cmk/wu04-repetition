import { useEffect, useState } from "react";

function App() {
  // dette state bliver vist ved componentWillMount
  var [content, setContent] = useState([
    { className: "..." }
  ])

  // Funktionen i denne useEffect-hook bliver kørt
  // én gang, ved componentDidMount (fordi der er et
  // tomt dependency-array)
  useEffect(function() {
    fetch("http://localhost:4000/api/v1/classes")
      .then(res => res.json())
      .then(data => setContent(data))
  }, [])

  return (
    <>
      <h1>Hold</h1>
      {content.map(element => <p>{element.className}</p>)}
    </>
  );
}

export default App;
