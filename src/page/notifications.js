import '../styles/notifications.css';
import profileimage from '../images/Pc.jpeg';

function Notifications(){

    return(
        <div className='notifications'>
             
             <div className='notificationHead'>
                    <h1>Notifications</h1>
             </div>


             <div className='mssg'>

                <div className='imageprofile'>
                    <img src={profileimage} />
                </div>

                <div className='content'>

                   <div className='name'>
                        <h4>Akash Dhiman</h4>
                    </div> 

                    <div className='notificationss'>
                            <p>Met those who have become Ministers of State for the first time in the Council of Ministers. Heard their experiences and insights as they have just embarked on their ministerial journey.</p>
                    </div>

                </div>

             </div>

        </div>
    )

}

export default Notifications;