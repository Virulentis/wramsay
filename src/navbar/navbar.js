import './navbar.css';
// import resume from '../resources/WRamsay_Resume.pdf';

import { ThemeContext } from '../App';
import { ReactComponent as Sun } from '../logo/sun.svg';
import { ReactComponent as Moon } from '../logo/moon.svg';
import resume from '../resources/WRamsay_Resume.pdf';
import React, { useState } from 'react';

function Navbar() {

    

    function setColor(type, color) {
        document.documentElement.style.setProperty(type, color)
      }
    
      function toggleTheme () {
        setColor('--background-color', )
        var checkbox = document.getElementById("themeBox");

        //Light Mode
        if (checkbox.checked) {
          setColor('--background-color', 'rgb(248, 248, 248)')
          setColor('--text-color', 'black')
          setColor('--highlight-color', 'rgb(185, 185, 185)')
          
        }
        //Dark Mode
        else {
          setColor('--background-color', 'black')
          setColor('--text-color', 'white')
          setColor('--highlight-color', 'rgb(68, 68, 68)')
        }
        handleCheckboxChange()


      }

      const [isChecked, setIsChecked] = useState(false);
   
      const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };
    


    return(

        <div id= "Nav_bar">  
                <li className="Nav_item"><a href="#About_Me" className='Nav_val' >About Me</a></li>
                <li className="Nav_item"><a href="#Projects" className='Nav_val'>Projects</a></li>
                <li className="Nav_item"><a href="#socials" className='Nav_val'>Socials</a></li>
                <li className="Nav_item"><a href={resume} className='Nav_val' download="resume">Resume</a></li>
                <li className="Nav_item Nav_right"><div id="svg_container" className={isChecked ? 'checked' : 'unchecked'}><label className= "tetst"><input type='checkbox' onChange={toggleTheme} className='checkbox' id="themeBox"></input>{isChecked? <Sun></Sun>: <Moon></Moon>}</label></div></li>
        </div>
    );

}


export default Navbar


// <a href="#home_section">home</a>
// <a href="#home_section">home</a>

// /web_footer/web_footer#Socials'


// <a href="./pdfFile.pdf" target="_blank" type="application/pdf" rel="alternate" media="print">
{/* <li className="Nav_item"><a href={resume} className='Nav_val'target="_blank" type="application/pdf" rel="alternate" media="print">Resume</a></li> */}
