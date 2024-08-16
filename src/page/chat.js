import "../styles/chat.css";
import React, { useState, useEffect, useContext } from "react";
import  UserContext  from "../context/context";
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
  const [selectedChat, setSelectedChat] = useState()
  const{setCurrentChat} = useContext(UserContext);
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
    return <ChatBar onClick = {() => {setCurrentChat(items.id)} } chat={items} key={index} />;
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

     
    </div>
  );
}

export default Chat;
