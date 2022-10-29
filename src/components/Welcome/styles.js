import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    
    .left{
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100vh;
        background-color: var(--green);
        
        h1{
            color: var(--white);
            font-size: 150%;
        }
    }
    
    .right{
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        align-items: center;
        width: 50%;
        gap: 10px;
        height: 100vh;
        background-color: var(--grey-2);
        
        p{
            max-width: 50%;
            font-size: 100%;
            color: var(--white);
            text-align: justify;
        }

        button{
            display: flex;
            justify-content: center;
            border-radius: 15px 15px;
            min-width: 50%;
            padding: 5px;
            font-weight: bold;
            font-size: 100%;
            background-color: var(--green);
        }
    }

    @media (max-width: 768px){
        display: flex;
        
        .left{
            width: 50%;
            
        }
        
        .right{
            height: 100vh;
            width: 50%;
        }
    }
    
    @media (max-width: 425px){
        display: flex;
        flex-direction: column;
        
        .left{
            display: none;
        }
        
        .right{
            height: 100vh;
            width: 100%;
        }
    }

    @media (max-width: 375px){
        display: flex;
        flex-direction: column;
        
        .left{
            display: none;
        }
        
        .right{
            height: 100vh;
            width: 100%;
        }
    }

    
    
`;