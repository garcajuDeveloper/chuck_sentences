import  { 
            API_URL
        } from '../resources/String';

export const getQuote = async () => { 
    const resultQuote = await (await fetch(API_URL)).json();
    console.log(resultQuote.value);
}