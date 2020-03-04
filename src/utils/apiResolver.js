import  { 
            API_URL
        } from '../resources/String';

export const getQuote = async () => {
    const apiCall = await fetch(API_URL);
    const quoteResult = await apiCall.json();
    console.log(quoteResult.value); 
}