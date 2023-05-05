import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/";
import RoomPage from "./pages/room/";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>CommuniCast</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
      </Routes>
    </div>
  );
}
