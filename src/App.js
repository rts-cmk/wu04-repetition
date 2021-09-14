import { useState } from "react";

function MyComponent() {
  // Den destrukturerede metode
  // første element i arrayet er statet,
  // andet element i arrayet er en funktion, som ændrer værdien
  // af det første element i arrayet.
  var [on, setOn] = useState(false)

  return (
  <>
  <div style={{
    width:100,
    height:100,
    backgroundColor: on ? "yellow" : "black"
  }}></div>
  <button onClick={() => setOn(!on)}>CLEECK MEH!! xD</button>
  </>
)
}


function App() {
  return (
    <MyComponent text="Hej" />
  );
}

export default App;
