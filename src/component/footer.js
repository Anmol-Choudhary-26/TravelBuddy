import '../styles/footer.css';
import Logo from '../images/temperature.png';

function footer(){
  
    return(
    <div className='foot'>
        
        <div className='Box1'>
        
        <div className='firstfoot'>
        <img src={Logo} className='box1img'/>  
        <p className='box1para'>TravelBuddy</p>
        </div>

        <div className='langbtn'>
                <select>
                    <option>English</option>
                    <option>Hindi</option>
                </select>
       </div>      
          
         
        </div>


        <div className='Box1'>

        </div>

        <div className='Box1'>

        </div>

        <div className='Box1'>

        </div>



    </div>

    )

}

export default footer;