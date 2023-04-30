import "./App.css";
import Navbar from "./Components/Navbars/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import React, {useReducer} from "react";
import Messaging from "./Components/Messaging/Messaging";

export const searchContext = React.createContext();

const initialState = false;
const reducer = (state, action) => {
  switch (action) {
    case "search":
      return true;
    case 'close':
      return false
    default:
      return state;
  }
};

function App() {

  const [search, dispatch] = useReducer(reducer, initialState);

  return (
    <searchContext.Provider value={{showSearch: search, searchDispatch: dispatch}}>
      <div className="App py-1">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </searchContext.Provider>
  );
}

export default App;
