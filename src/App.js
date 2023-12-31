
import './App.css';
import WebFooter from './web_footer/web_footer';
import Navbar from './navbar/navbar';
import Intro from './introduction/introduction';
import ItemCard from './itemcard/itemcard';
import { createContext, useState } from "react";


export const ThemeContext = createContext(null);

function App() {

  

  return (
  <ThemeContext.Provider >
  <div className="App" >
    

    <Navbar></Navbar>
    
    <Intro />
    
    <span id="About_Me"></span>
    <span className='section_card' >About Me</span>

    <div id="skills">
      <h3 class="subheader">Skills</h3>
      <p class="subtext">Languages: Java, Python, SQL, C, C#, HTML, CSS </p>
      <p class="subtext">Tools and Environments: Visual Studio Code, Git, IntelliJ IDEA</p>
    </div>
    
    
    <ItemCard 
    src='.\images\education.jpg' 
    title='Bachelors of Science' 
    desc='Completed the degree with a major in computer science at University of Northern British Columbia in 2023.' 
    flip='' />


    <span id="Projects"></span>
    <span className='section_card' >Projects</span>

    <ItemCard  src='.\images\discord_bot.jpg' 
    title='Discord Text / Image Generator'
    desc="In Python using various libraries and models made a discord bot that henerates images/text.
    The bot remembers previous text and will try to stay on topic. It can generate images directly
    from the user's prompt or from the user asking it to take a picture."
    flip='flip' />


    <ItemCard src='.\images\code.jpg' title='Frequent Pattern Growth Algorithm' desc='
    Implemented the data mining algorithm
    frequent pattern growth in Java. 
    The Algorithm uses trees and the divide
    and conquer approach to find frequent
    patterns in the provided data set and
    minimum support. 
    Outputs the frequent patterns and the
    time it took to produce the result.' flip='' />


    <ItemCard 
    src= '.\images\machine-learning.jpg' 
    title="Reddit Sentiment Analysis RNN" 
    desc="Worked with a team in Python to create a
    recurrent neural network (RNN) that
    judges the sentiment of text.
    Would scrape subreddits and
    then, predict the sentiment of the
    comments.
    It then would then output the
    sentiment of each comment.
    "
    flip="flip"/>

    {/* <ItemCard src='' title='' desc='' flip='' /> */}
    <WebFooter />
    
  </div>
  </ThemeContext.Provider>
  );
}

export default App;
