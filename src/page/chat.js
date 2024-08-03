import "../styles/chat.css";
import profile from "../images/Pc.jpeg";
import React, { useState, useEffect } from "react";
import Sidebar from "../component/sidebar";
import ChatBar from "../component/chatBar";
import { getChats } from "../hooks/useChat";
function Chat() {
  const [chat, setChat] = useState([]);
  
  useEffect(() => {
    // fetch chat data from server
    async function functionGetChat() {
      const data = await getChats();
      setChat(data);
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
