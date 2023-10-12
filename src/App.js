import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Items, Sales, Reports } from "./pages";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Inventory Management App</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
}
