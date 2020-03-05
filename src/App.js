import React , {useState} from 'react';
import  { 
          MainContainer,
          Button 
        } from './app_styled_components/appStyledComponents';

import  { getQuote } from './utils/apiResolver';
import  Quote  from './components/quote/Quote'; 

function App() {
  const [chuckQuote, saveChuckQuote] = useState({});
  let isEmptyQuote;
  Object.entries(chuckQuote).length === 0 && chuckQuote.constructor === Object ? 
    isEmptyQuote = true : isEmptyQuote = false;
  
  return (
    <MainContainer>
      <Button
        onClick = { () => getQuote(saveChuckQuote)}
      >
        Talk me
      </Button>
      { 
        !isEmptyQuote ?  
          <Quote
            chuckQuote = {chuckQuote.toString()}
        ></Quote>
        :
        null 
      }
    </MainContainer>
  );
}

export default App;
