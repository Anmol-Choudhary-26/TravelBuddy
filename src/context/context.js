import React, { useState, createContext } from "react";

const UserContext = createContext();

function Provider({children}){
    const [chat, setChat] = useState()

    const valueToShare = {
        chat: chat,
        setCurrentChat(chatId){
            setChat(chatId);
            console.log("Chat changed to ", chat);
        }
    };

    return(
        <UserContext.Provider value={valueToShare}>
            {children}
        </UserContext.Provider>
    )
} 
export {Provider}
export default UserContext;