import styled from 'styled-components';

export const Container = styled.div`
      
     display: flex;
     user-select: none;

    .main { 
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    margin-top: 200px;
   
    }
    
    h1 {
        color: white;  
        font-size: 3em;
        font-family: 'Bayon', sans-serif;
        letter-spacing: 10px;
        
    }

    form {
        display: flex;
        gap: 1em;
        justify-content: center;
        width: 80%;
    }
    label {
        align-items: center;
        color:white;
        display: flex;
        font-family:'Bayon', sans-serif; 
        font-size: 1.5em;
        gap: 5px;
        
    }

    input{
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 0.8em;
        font-weight: bold;
        letter-spacing: 1.5px;
        padding: 5px;
    }
    
`;

export const Button = styled.button`
    
    border-radius: 30px;
    color: ${({ disabled }) => (disabled ? 'white' : 'black')};
    cursor: pointer;
    font-family:'Bayon', sans-serif;
    font-size: 1.5em;
    width: 200px; 

    &:hover{
        background-color: #212121;
        color: #FFC814 ;  
    }
`;

export const Logo = styled.div`

    display: flex;
    background-color: #FFC814;
    border-radius: 5%;
    height: 200px;
    width: 200px;
    
    .disc{
        border: 1px solid #212121;
        border-radius: 50%;
        display: flex;
        height: 80%;
        margin: auto;
        width: 80%;
        background-color: #212121;
        background-image: linear-gradient(to right,  #212121, transparent, #000000)
    }

    .disc2 {

        background-color: #DB1A1A;
        border: 5px solid #C92424;
        border-radius: 50%;
        display: flex;
        height: 33%;
        margin: auto;
        width: 33%;
        
    }
    .name {
        color: #212121;
        font-family: 'Bayon', sans-serif; 
        font-size: 1.5em;
        font-weight: bolder;
        letter-spacing: 3px;
        justify-content: center;
        margin: auto;
        
    }
`;
