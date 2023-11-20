import './web_footer.css';
import { ReactComponent as LinkedIn } from '../logo/linkedin.svg';
import { ReactComponent as Mail } from '../logo/mail.svg';
import { ReactComponent as Github } from '../logo/github.svg';

function web_footer() {
    return(
        
            <div id="socials">
                <div id="linkedIn"><a href="https://www.linkedin.com/in/william-ramsay-b2b45617b"><LinkedIn></LinkedIn></a></div>
                <div id="github"><a href="https://github.com/Virulentis"><Github></Github></a></div>
                <div id="email"><a href="mailto:WilliamWRamsay@yahoo.com"><Mail></Mail></a></div>
            </div>
        
    )


}
export default web_footer