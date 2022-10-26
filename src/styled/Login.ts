import styled from "styled-components";


export const LoginContainer = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #CFC5D3;

    .content{
        width: 100%;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        
        @media screen and (max-width:720px){
            flex-direction: column;
            gap: 0;
        }

        .logo{
            width: 40%;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 1rem;
            img{
                width: 75%;
            }
            @media screen and (max-width:720px){
                min-height: 50vh;
                width: 100%;
            }
            button{
                font-size: 1.4rem;
                line-height: 1.6;
                font-weight: bold;
                padding: 0.25rem 2rem;
                border: 0;
                border-radius: 2rem;
                background: #1F1AFF;
                color: #CFC5D3;
            }
            button.btnLogin{
                display: ${props => props.theme === 'sign' ? 'block' : 'none'};
            }
            button.btnSignIn{
               display: ${props => props.theme === 'login' ? 'block' : 'none'};
            }
        }
        .sign_in{
            min-height: 100vh;
            display: flex;
            overflow: ${props => props.theme === 'sign' ? 'visible' : 'hidden'};
            visibility: ${props => props.theme === 'sign' ? 'visible' : 'hidden'};
            width: ${props => props.theme === 'sign' ? "70%" : "0"};
            
            align-items: center;
            justify-content: center;
            background: #240731;

            transition: all .4s linear;

            @media screen and (max-width:720px){
                    min-height: auto;
                    height: ${props => props.theme === 'sign' ? "50vh" : "0"};
                    width: 100%;
                }

            .cardLogin{
                width: 100%;
                max-width: 800px;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                
                padding: 2rem;
                @media screen and (max-width:720px){
                    min-height: 50vh;
                    width: 100%;
                }

                h1{
                    font-family: 'Montserrat';
                    font-size: 2.5rem;
                    color: #CFC5D3;
     
                }

                form{
                    width: 80%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 1.5rem;

                    input{
                        width: 100%;
                        padding: 0.4rem .5rem;
                        border: 0;
                        background: #CFC5D3;
                        color: #000;
                        font-family: 'Montserrat';
                        border-radius: 4px;
                        font-size: 1.1rem;
                        line-height: 1.6;
                    }

                    button{
                        font-size: 1.4rem;
                        line-height: 1.6;
                        font-weight: bold;
                        padding: 0.25rem 0.5rem;
                        width: 12rem;
                        border: 0;
                        border-radius: 2rem;
                        background: #1F1AFF;

                        color: #CFC5D3;
                    }
                }
            }
        }
        .login{
            min-height: 100vh;
            display: flex;
            overflow: ${props => props.theme === 'login' ? 'visible' : 'hidden'};
            visibility: ${props => props.theme === 'login' ? 'visible' : 'hidden'};
            width: ${props => props.theme === 'login' ? "70%" : "0"};
            
            align-items: center;
            justify-content: center;
            background: #240731;

            transition: all .4s linear;

            @media screen and (max-width:720px){
                min-height: auto;
                height: ${props => props.theme === 'login' ? "50vh" : "0"};
                width: 100%;
            }

            .cardLogin{
                width: 100%;
                max-width: 800px;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                
                padding: 2rem;
                @media screen and (max-width:720px){
                    min-height: 50vh;
                    width: 100%;
                }

                h1{
                    font-family: 'Montserrat';
                    font-size: 2.5rem;
                    color: #CFC5D3;
     
                }

                form{
                    width: 80%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 1.5rem;

                    input{
                        width: 100%;
                        padding: 0.4rem .5rem;
                        border: 0;
                        background: #000;
                        color: #fff;
                        font-family: 'Montserrat';
                        border-radius: 4px;
                        font-size: 1.1rem;
                        line-height: 1.6;
                    }

                    button{
                        font-size: 1.4rem;
                        line-height: 1.6;
                        font-weight: bold;
                        padding: 0.25rem 0.5rem;
                        width: 12rem;
                        border: 0;
                        border-radius: 2rem;
                        background: #1F1AFF;

                        color: #CFC5D3;
                    }
                    
                }
            }

        }
    }
`