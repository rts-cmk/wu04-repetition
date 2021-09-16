import Store from "./Store"
import Login from "./Login"
import { useState } from "react";
import MySchedule from "./MySchedule";
import { Router } from "@reach/router"

function App() {
  var [token, setToken] = useState(null)

  return (
    <Store.Provider value={{ token, setToken }}>
      <Router>
        <Login default path="/" />
        {token ? <MySchedule path="/myschedule" /> : null}
      </Router>
    </Store.Provider>
  )
}

export default App;
