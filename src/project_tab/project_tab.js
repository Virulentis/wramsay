
import styles from './project_tab.css';

function project(props) {
    return(
        <>
            
            
            <div className='project_small'>
                <div className = "TopCard">
                    <img src = "\images\machine-learning.jpg" alt = "uh oh!" className = "icon"></img>
                    <div className="Project_title">Reddit Sentiment analysis</div>
                    <div className="date">2023</div>
                </div>
                <div className="description">• Worked with a team in Python to create a
recurrent neural network (RNN) that
judges the sentiment of text.
• The program would scrape subreddits and
then, predict the sentiment of the
comments.
• The program would then output the
sentiment of each comment.</div>
            </div>

            <div className='project_extend'> 
            
            </div>
        </>
    );

}


export default project