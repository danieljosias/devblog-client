import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: ${(props) => (props.showPost ? "flex" : "none")}; 
    gap: 20px;
    
    .postCreatedContainer{ 
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid;
        border-radius: 25px 25px 25px 0px;
        min-width: 400px;
        min-height: 300px;
    }
    
    .postCreatedHeader{
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 0px 10px;
        
        img{
            width: 55px;
            border-radius: 25px;
            margin-top: 10px;
        }
        span{
            
        }
    }
    
    .postCreated{   
        padding: 20px 10px;
        min-height: 100px;
        max-height: 100px;
        min-width: 400px;
        max-width: 400px;
        overflow-y: scroll;

        p{
            font-weight: bold;
        }
    }
    
    .postCreatedButtons{
        display: flex;
        justify-content: space-around;
        margin-top:  10px;

        button{
            width: 40%;
            padding: 10px;
        }

        .red{
            background-color: var(--red);
            color: var(--black);
            font-weight:bold;
        }
        
        .green{
            background-color: var(--green);
            color: var(--black);
            font-weight:bold;
        }
    }

    @media (max-width: 375px){
        .postCreatedContainer{ 
            min-width: 350px;
            max-width: 350px;
            min-height: 300px;
        }

        .postCreated{
            max-width: 350px;
            min-width: 350px;
        }
    }
`
