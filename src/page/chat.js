import "../styles/chat.css";
import profile from "../images/Pc.jpeg";
import React, { useState, useEffect } from "react";
import Sidebar from "../component/sidebar";
import ChatBar from "../component/chatBar";
import { getChats } from "../hooks/useChat";
import { io } from "socket.io-client";
function Chat() {
  const [chat, setChat] = useState([]);
  const user = JSON.parse(JSON.stringify("userId"));
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const socket = io("https://travelbuddy-backend-gxl9.onrender.com");
    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, [user]);

  useEffect(() => {
    if (socket === null) return;
    socket.emit("addNewuser", user);
    socket.on("getOnlineUsers", (res) => {
      setOnlineUsers(res);
      setMessage([])
      console.log(onlineUsers )
    });

    return () => {
      socket.off("getOnlineUsers");
    };
  }, [socket]);

  useEffect(() => {
    if (socket === null) return;
    // socket.emit("sendMessage", { ...message, recipientId });
  }, [message, socket]);

  useEffect(() => {
    // fetch chat data from server
    async function functionGetChat() {
      const data = await getChats();
      setChat(data);
      console.log(data, "chat");
    }
    functionGetChat();
  }, []);

  const renderChat = chat.map((items, index) => {
    return <ChatBar chat={items} key={index} />;
  });
  return (
    <div className="chatfull">
      <div className="chats">
        <div className="chatHead">
          <Sidebar />
          <h3>Chats</h3>
        </div>
        {renderChat}
      </div>

      <div className="chatright">
        <div className="mssgup">
          <img src={profile} alt="profile" className="profileimg" />
          <h4>Akash Dhiman</h4>
        </div>

        <div className="mssgmid"></div>

        <div className="mssgdown">
          <input type="text" placeholder="write a message" className="Input" />
          <button type="submit" className="send">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
