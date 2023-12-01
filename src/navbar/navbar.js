import './navbar.css';
// import resume from '../resources/WRamsay_Resume.pdf';

import { ThemeContext } from '../App';



function Navbar() {
   


    return(

        <div id= "Nav_bar">  
                <li className="Nav_item"><a href="#About_Me" className='Nav_val'>About Me</a></li>
                <li className="Nav_item"><a href="#Projects" className='Nav_val'>Projects</a></li>
                <li className="Nav_item"><a href="#socials" className='Nav_val'>Socials</a></li>
                <li className="Nav_item"><a  className='Nav_val' download="resume">Resume</a></li>
                <li className="Nav_item Nav_right"><button  ></button></li>
        </div>
    );

}


export default Navbar


// <a href="#home_section">home</a>
// <a href="#home_section">home</a>

// /web_footer/web_footer#Socials'


// <a href="./pdfFile.pdf" target="_blank" type="application/pdf" rel="alternate" media="print">
{/* <li className="Nav_item"><a href={resume} className='Nav_val'target="_blank" type="application/pdf" rel="alternate" media="print">Resume</a></li> */}
