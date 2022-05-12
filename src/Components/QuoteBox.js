import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import "../Components/QuoteBox.scss"
const QuoteBox=({quote,author,color, generateRandomQuote})=>{
    
    return(
    <div id="quote-box" style={{color:color}}>
        <p id="text" className='transition'>
            {quote}
        </p>
        <p id="author" className= "transition">
        {author}
        </p>
        <div id="bottom-portion">
        <a style={{backgroundColor:color,color:"white"}} id= "tweet-quote" className= "transition" target="_blank" rel="noreferrer" href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote}`)}><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
        <button className="transition" style={{backgroundColor:color}} id= "new-quote" onClick={()=>generateRandomQuote()}>New Quote</button>
    </div>
</div>
    )
}

export default QuoteBox;
