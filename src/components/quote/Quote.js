import React from 'react';
import  {
            QuoteContainer
        } from './quoteStyledComponent'

const Quote =({chuckQuote}) => {
    return ( 
        <QuoteContainer>
            <h3>{chuckQuote}</h3>
        </QuoteContainer>
     );
}
 
export default Quote;