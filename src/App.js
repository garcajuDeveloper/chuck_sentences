import React from 'react';
import  { 
          MainContainer,
          Button 
        } from './app_styled_components/appStyledComponents';

import  { getQuote } from './utils/apiResolver';

function App() {
  return (
    <MainContainer>
      <Button
        onClick = { () => getQuote()}
      >
        Talk me
      </Button>
    </MainContainer>
  );
}

export default App;
