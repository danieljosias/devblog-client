import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center ;
    height: 100vh;

    .blog{
        width: 50%;

        img{
            width: 80%;
        }
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        background-color: var(--grey-1);
        min-width: 350px;
        min-height: 365px;
        border-radius: 0px 15px 0px 15px;
        padding: 5px;
    }
    
    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    input{
        width: 270px;
        border-radius: 15px;
        border: none;
        padding: 5px;
        background-color: var(--grey-2);
        color: var(--white);
    }

    button{
        display: flex;
        justify-content: center;
        border-radius: 15px 15px;
        width: 270px;
        padding: 5px;
        font-weight: bold;
        font-size: 100%;
        background-color: var(--green);
    }

    .link{
        color: var(--black);
        text-decoration: underline;
    }

    @media (max-width: 768px){
        .blog{
            display: none;
        }

        form{
            width: 450px;
        }
    }
    
    @media (max-width: 425px){
        .blog{
            display: none;
        }

        form{
            width: 320px;
        }
    }

    @media (max-width: 375px){
        .blog{
            display: none;
        }

        form{
            width: 320px;
        }
    }
`;