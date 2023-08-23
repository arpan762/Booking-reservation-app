import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { List } from "./Pages/List";
import { Hotel } from "./Pages/Hotel";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </div>
  );
}

export default App;
