import '../styles/chat.css';
import profile from '../images/Pc.jpeg';
import React, {useContext} from'react';
import UserContext from '../context/context';

const chatBox = ({}) => {
    const {chat} = useContext(UserContext)
    const {name, msges} = chat
    const renderChat = msges.map((msg) =>{
        return( <div>{msg}</div>)
    })
    return (
    <div className="chatright">
    <div className="mssgup">
      <img src={profile} alt="profile" className="profileimg" />
      <h4>{name}</h4>
    </div>

    <div className="mssgmid">{renderChat}</div>

    <div className="mssgdown">
      <input type="text" placeholder="write a message" className="Input" />
      <button type="submit" className="send">
        Send
      </button>
    </div>
  </div>
    )
}

export default chatBox;