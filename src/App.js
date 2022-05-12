import './App.scss';
import React, { useState, useEffect } from 'react';
import colorArray from './color';
import QuoteBox from './Components/QuoteBox';


function App() {

  const quoteDatabase= 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

  const [quotesArray, setQuotesArray]=useState(null);
  const [quote,setQuote]=useState("I think, therefore I am.");
  const [author,setAuthor]=useState("René Descartes");
  const [color,setColor]=useState(colorArray[0]);
  const fetchQuote=async()=>{
    const response= await fetch(quoteDatabase);
    const data=await response.json();
    setQuotesArray(data.quotes);
    
  }
  useEffect(()=>{
    fetchQuote(quoteDatabase)
  },[quoteDatabase]);
  
  //when button is clicked, sets quote and author to random integer, and color to a random color in color array
  const generateRandomQuote=()=>{
    let randomInt=Math.floor(quotesArray.length*Math.random())
    setQuote(quotesArray[randomInt].quote);
    setAuthor(quotesArray[randomInt].author);
    setColor(colorArray[Math.floor(Math.random()*colorArray.length)])
  }
  
  return (
    <div className="App">
      <header className="App-header transition" style={{backgroundColor:color}}>
        <QuoteBox quote={quote} author={author} color={color} generateRandomQuote={generateRandomQuote}></QuoteBox>
      </header>
    </div>
  );
}

export default App;