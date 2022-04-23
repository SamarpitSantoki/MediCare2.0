"use strict";
import { SetStateAction, useEffect, useState } from "react";
import { io } from "socket.io-client";

//connect to websocket
const socket = io("http://localhost:8080");
const Index = () => {
  const [msg, setMsg] = useState("");
  const [msgList, setMsgList] = useState([]);
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setMsg(event.target.value);
  };

  const handleMsgSend = (event) => {
    event.preventDefault();
    socket.emit("send_message", { sender: "me", msg, room });
    setMsgList((prevMsg) => [
      ...prevMsg,
      {
        sender: "me",
        msg,
      },
    ]);
    setMsg("");
    console.log(msgList);
  };

  //join diff rooms based on current chat person
  const handleRoomChange = (event) => {
    setMsgList([]);
    console.log(event.target.id);
    setRoom(name + event.target.id);
    socket.emit("join_room", { room: name + event.target.id });
  };
  //update messageList on receiving new messages
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMsgList((prevMsg) => [
        ...prevMsg,
        {
          sender: "else",
          msg: data.msg,
        },
      ]);
    });
  }, [socket]);

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-3 w-screen h-screen bg-green-300">
        <div className="col-span-1 row-span-3 bg-green-300">
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <ul className="flex flex-col  justify-around items-center h-full">
            <li
              id="samar"
              className="ring-1 ring-fuchsia-400 px-3 py-2 rounded-md hover:bg-fuchsia-400 hover:text-white"
              onClick={handleRoomChange}
            >
              Samar
            </li>
            <li
              id={"Naman"}
              className="ring-1 ring-fuchsia-400 px-3 py-2 rounded-md hover:bg-fuchsia-400 hover:text-white"
              onClick={handleRoomChange}
            >
              Naman
            </li>
            <li
              id={"Aman"}
              className="ring-1 ring-fuchsia-400 px-3 py-2 rounded-md hover:bg-fuchsia-400 hover:text-white"
              onClick={handleRoomChange}
            >
              Aman
            </li>
            <li
              id={"Chaman"}
              className="ring-1 ring-fuchsia-400 px-3 py-2 rounded-md hover:bg-fuchsia-400 hover:text-white"
              onClick={handleRoomChange}
            >
              Chaman
            </li>
          </ul>
        </div>
        <div className="flex flex-col col-span-3 row-span-3 bg-blue-300">
          <div className=" bg-pink-300">Chat Name</div>
          <div className="grow bg-yellow-300 h-max flex flex-col overflow-scroll">
            {msgList &&
              msgList.map((message) => {
                return (
                  <div
                    key={message.sender}
                    className={`m-1 bg-blue-300 ${
                      message.sender === "me" && "text-right"
                    }`}
                  >
                    {message.msg}
                  </div>
                );
              })}
          </div>
          <form className="flex m-3 justify-center ">
            <button
              type="submit"
              className="p-3 border border-blue-500 hover:bg-blue-500 rounded-lg mx-3"
              onClick={handleMsgSend}
            >
              Send Message
            </button>
            <input
              className="grow"
              value={msg}
              type="text"
              onChange={handleInputChange}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Index;
