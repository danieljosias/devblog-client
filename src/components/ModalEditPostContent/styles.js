import styled from 'styled-components';

export const Container = styled.div`
    .modalHeader{
        display: flex;
        justify-content: space-between;
        
        button{
            background-color: var(--white);
        }
        
    }
    
    .modalForm{
        
        textarea{
            margin-top: 7px;
            min-width: 350px;
            max-width: 350px;
            min-height: 190px;
            max-height: 190px;
        }
        
        button{
            min-width: 350px;
            max-width: 350px;
            background-color: var(--green);
            padding: 5px;
            font-weight: bold;
        }
    }
`;