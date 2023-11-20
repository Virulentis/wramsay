import './navbar.css';


function navbar() {
    return(

        <div>
            <ul id= "Nav_bar" >
                <li className="Nav_item"><a href="#About_Me" className='Nav_val'>About Me</a></li>
                <li className="Nav_item"><a href="#Projects" className='Nav_val'>Projects</a></li>
                <li className="Nav_item"><a href="#socials" className='Nav_val'>Socials</a></li>
                <li className="Nav_item"><a href="\resources\WRamsay_Resume.pdf" className='Nav_val'target="_blank" type="application/pdf" rel="alternate" media="print">Resume</a></li>
            </ul>
        </div>
    );

}


export default navbar


// <a href="#home_section">home</a>
// <a href="#home_section">home</a>

// /web_footer/web_footer#Socials'


// <a href="./pdfFile.pdf" target="_blank" type="application/pdf" rel="alternate" media="print">