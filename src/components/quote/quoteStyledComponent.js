import styled from '@emotion/styled';

export const QuoteContainer = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Special+Elite&display=swap');

    padding: 3rem;
    border-radius: .5rem;
    background-color: #f7c264;
    max-width: 800px;
    margin-top: 1rem;

    h3{
        font-family:'Special Elite', cursive;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before{
            content: open-quote;
            font-size: 7rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
`;