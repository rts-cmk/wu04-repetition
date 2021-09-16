import { useState } from "react";
import ClassList from "./components/ClassList";
import Header from "./components/Header";
import Store from "./Store";

function App() {
  var [cartContent, setCartContent] = useState([])

  return (
    <Store.Provider value={{cartContent, setCartContent}}>
      <Header />
      <ClassList />
    </Store.Provider>
  )
}

export default App;
