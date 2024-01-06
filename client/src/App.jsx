import React from "react";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();

  const sendRequest = async () => {
    try {
      const response = await fetch("http://localhost:3000");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const goToChat = () => {
    navigate("/chat");
  };

  const goToRooms = () => {
    navigate("/rooms");
  };

  return (
    <div>
      <button onClick={sendRequest}>Send Request</button>
      <button onClick={goToChat}>Go to Chat</button>
      <button onClick={goToRooms}>Go to Rooms</button>
    </div>
  );
}

export default App;
