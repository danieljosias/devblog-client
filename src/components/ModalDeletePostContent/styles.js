import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    .modalHeader{
        display: flex;
        justify-content: space-between;
        
        button{
            background-color: var(--white);
        }
        
    }
    
    .modalForm{
        display: flex;
        justify-content:  space-between;
        align-items: center;

        textarea{
            margin-top: 7px;
            min-width: 350px;
            max-width: 350px;
            min-height: 190px;
            max-height: 190px;
        }
        
        button{
            min-width: 160px;
            max-width: 160px;
            background-color: var(--green);
            padding: 5px;
            font-weight: bold;
        }

        .green{
            background-color: var(--green);
        }
        
        .red{
            background-color: var(--red);
        }


    }
`;