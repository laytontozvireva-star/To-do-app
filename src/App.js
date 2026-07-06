import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navbar";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;