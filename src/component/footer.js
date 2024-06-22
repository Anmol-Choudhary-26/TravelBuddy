import '../styles/footer.css';
import Logo from '../images/temperature.png';

function footer(){
  
    return(
    <div className='foot'>
        
        <div className='Boxx'>
        
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
        
        <div className='firstpara'>
        <p>@2024 TravelBuddy, Inc.</p>  
        </div>
         
        </div>


        <div className='Boxx'>

            <p className='secondfoot'>About</p>

            <ul className='ulist'>
                <li><a href='abc'>Careeers</a></li>
                <li><a href='abc'>Investor Relations</a></li>
                <li><a href='abc'>Legal</a></li>
                <li><a href='abc'>Github</a></li>
                <li><a href='abc'>Security Information</a></li>
                <li><a href='abc'>Trust Center</a></li>
                <li><a href='abc'>Connect with us</a></li>
            
            </ul>

        </div>

        <div className='Boxx'>

        <p className='secondfoot'>Support</p>

<ul className='ulist'>
    <li><a href='abc'>Contact Us</a></li>
    <li><a href='abc'>Customer Portal</a></li>
    <li><a href='abc'>Customer Support</a></li>
    <li><a href='abc'>Manage Cookies</a></li>

</ul>


        </div>

        <div className='Boxx'>

        <p className='secondfoot'>Deployment Options</p>

<ul className='ulist'>
    <li><a href='abc'>Enterprise Advanced</a></li>
    <li><a href='abc'>Community Edition</a></li>

</ul>
        </div>



    </div>

    )

}

export default footer;