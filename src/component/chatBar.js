import '../styles/chat.css';
import profile from '../images/Pc.jpeg';
import React from'react';

const chatbar = ({chat}) => {
    const user = JSON.parse(localStorage.getItem('userId'))
    const username = user === chat.user1 ? chat.user2Name : chat.user1Name;
    console.log(username)
    return (
    <div className='Message'>

                <div className='imageprofile'>
                    <img src={profile} alt='profile' />
                </div>

                <div className='content'>

                    <div className='namee'>
                        <h4>{username}</h4>
                    </div>

                    <div className='notificationss'>
                        <p>Met those who have become.</p>
                    </div>

                </div>

            </div>
     );
}

export default chatbar;