import { useState } from "react";
import MySecretComponent from "./MySecretComponent";
import { TokenStore, DarkmodeStore } from "./Store";

function App() {
  var [token, setToken] = useState(null)
  var [darkmode, setDarkmode] = useState(false)

  return (
    <TokenStore.Provider value={{ token, setToken }}>
      <DarkmodeStore.Provider value={{darkmode, setDarkmode}}>
        <h1>Hej</h1>
        <MySecretComponent />
      </DarkmodeStore.Provider>
    </TokenStore.Provider>
  )
}

export default App;
