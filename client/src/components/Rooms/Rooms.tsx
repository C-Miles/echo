import React from "react";
import { RoomsProps } from "./types";

function Rooms({ createRoom, joinRoom, rooms }: RoomsProps) {
  console.log(rooms);
  return (
    <div>
      {rooms &&
        rooms.map((room, index) => (
          <button key={index} onClick={() => joinRoom(room._id)}>
            Join Echo Room
          </button>
        ))}
      <button onClick={createRoom}>Create Room</button>
    </div>
  );
}

export default Rooms;