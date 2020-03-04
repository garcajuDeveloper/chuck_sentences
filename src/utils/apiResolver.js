import  { 
            API_URL
        } from '../resources/String';

export const getQuote = async (saveChuckQuote) => { 
    const resultQuote = await (await fetch(API_URL)).json();
    saveChuckQuote(resultQuote.value);
}