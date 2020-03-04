import styled from '@emotion/styled';

export const MainContainer = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    padding-top: 15rem;
`;

export const Button = styled.button `
    @import url('https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap');

    background-color: #066fec;
    background-size: 300px;
    font-family: 'Press Start 2P', cursive;
    color: #fff;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 1rem;
    border: none;
    border-radius: 0.5rem;
    transition: 0.5s;

    &:hover{
        background-color: #fff;
        color: #066fec; 
    }
`;  