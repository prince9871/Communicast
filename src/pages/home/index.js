import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    navigate(`/room/${roomCode}`);
  };
  return (
    <div className="home-page">
      <form onSubmit={handleFormSubmit} className="form">
        <div>
          <label> Enter Room Id </label>
          <input
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
            type="text"
            required
            placeholder="Enter Room Code"
          />
        </div>
        <button type="submit">Enter Room</button>
      </form>
      <footer>
        <h3>
          This app was designed by{" "}
          <a href="https://linkedin.com/in/prince9871">@PrinceSoni</a> -
          Bringing creativity and functionality together.
        </h3>
        <p>Contact us for more information:</p>
        <ul>
          <li>Email: soniprince142@gmail.com</li>
          <li>Phone: 555-1234</li>
          <li>
            <a href="https://linkedin.com/in/prince9871">
              Visit our LinkedIn page
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default HomePage;
