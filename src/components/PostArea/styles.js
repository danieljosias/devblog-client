import styled from 'styled-components'

export const Container = styled.div`
    height: 25vh;
    display: flex;
    justify-content: center;
    text-align: center;
    padding-top: 5vh;

    .post{
        display: flex;
        justify-content: center;
        min-width: 400px;
        min-height: 100px;
        height: 20%;
        border: 1px solid;
        border-radius: 25px 25px 25px 0px;

        div{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;

            img{
                width: 55px;
                border-radius: 25px;
                margin-top: 10px;
            }
        
            input{
                min-width: 300px;
                padding: 10px;
                border-radius: 15px;
                border: none;
                border: 1px solid;
                cursor: pointer;
            }
        }
        
        .iconContainer{
            display: flex;
            flex-direction: column;
            justify-content: end;
            padding: 10px 0px;

            button{
                background-color: white;
            }
        }

        .icon{
            cursor: pointer;
        }
    }

    @media (max-width: 375px){
        .post{
            min-width: 350px;

            div{
                input{
                    min-width: 250px;
                }

            }
        }
    }
`;