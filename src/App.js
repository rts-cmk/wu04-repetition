import { useEffect, useState } from "react";
import axios from "axios"

function App() {
  var [content, setContent] = useState([])

  useEffect(function () {
    axios.post("http://localhost:4000/auth/token",
      { username: "user1", password: "1234" })
      .then(function (response) {
        if (response.status !== 200)
          throw new Error("BLARGH!")

        setContent(response.data)
        console.log(response.data)
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <p>{content.userId}</p>
  )
}

export default App;
