import React , {useState} from 'react';
import  { 
          MainContainer,
          Button 
        } from './app_styled_components/appStyledComponents';

import  { getQuote } from './utils/apiResolver';

function App() {
  const [chuckQuote, saveChuckQuote] = useState({});
  
  return (
    <MainContainer>
      <Button
        onClick = { () => getQuote(saveChuckQuote)}
      >
        Talk me
      </Button>
    </MainContainer>
  );
}

export default App;
