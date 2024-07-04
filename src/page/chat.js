import '../styles/chat.css';
import profile from '../images/Pc.jpeg';
import React from'react';

function Chat() {
    return (

        <div className='chatfull'>
        <div className='chats'>

            <div className='chatHead'>
                <h3>
                    Chats
                </h3>
            </div>


            <div className='Message'>

                <div className='imageprofile'>
                    <img src={profile} alt="profile" />
                </div>

                <div className='content'>

                    <div className='namee'>
                        <h4>Akash Dhiman</h4>
                    </div>

                    <div className='notificationss'>
                        <p>Met those who have become.</p>
                    </div>

                </div>

            </div>

            <div className='Message'>

                <div className='imageprofile'>
                    <img src={profile} alt='profile' />
                </div>

                <div className='content'>

                    <div className='namee'>
                        <h4>Akash Dhiman</h4>
                    </div>

                    <div className='notificationss'>
                        <p>Met those who have become.</p>
                    </div>

                </div>

            </div>


            <div className='Message'>

                <div className='imageprofile'>
                    <img src={profile} alt='profile' />
                </div>

                <div className='content'>

                    <div className='namee'>
                        <h4>Akash Dhiman</h4>
                    </div>

                    <div className='notificationss'>
                        <p>Met those who have become.</p>
                    </div>

                </div>

            </div>


            <div className='Message'>

                <div className='imageprofile'>
                    <img src={profile} alt='profile' />
                </div>

                <div className='content'>

                    <div className='namee'>
                        <h4>Akash Dhiman</h4>
                    </div>

                    <div className='notificationss'>
                        <p>Met those who have become.</p>
                    </div>

                </div>

            </div>


            <div className='Message'>

                <div className='imageprofile'>
                    <img src={profile} alt='profile' />
                </div>

                <div className='content'>

                    <div className='namee'>
                        <h4>Akash Dhiman</h4>
                    </div>

                    <div className='notificationss'>
                        <p>Met those who have become.</p>
                    </div>

                </div>

            </div>

        </div>

        <div className='chatright'>
            

            <div className='mssgup'>
                
                <img src={profile} alt='profile' className='profileimg' />
                <h4>
                    Akash Dhiman
                </h4>
            </div>

            <div className='mssgmid'>

            </div>

            <div className='mssgdown'>
                    
                    <input type='text' placeholder='write a message' className='Input' />
                    <button type='submit' className='send'>Send</button>
            </div>


        </div>


        </div>
    )

}

export default Chat;