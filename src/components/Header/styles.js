import styled from "styled-components"

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--green);
    height: 10vh;
    padding: 10px 20px;
    
    h1{
        font-size: 24px;
    }

    div{
        display: flex;
        align-items: center;

       
    }

    span{
        font-size: 24px;
        font-weight: bold;
        color: var(--black);
    }
    
    .iconContainer{
        cursor: pointer;
    }
    
    .iconLogout{
        font-size: 24px;
    }
    


`
