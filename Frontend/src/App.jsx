import { Route, Routes } from "react-router-dom";

import NavBar from "./components/nav";
import Docs from "./components/Docs";
import Visa from "./components/Visa";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/visa" element={<Visa />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </>
  );
}

export default App;
