import styled from "styled-components";


export const MainContent = styled.div`
    width: 100vw;
    height: 100%;
    box-sizing: border-box;
    font-family: 'Montserrat';
    color: #fff;

    .content{
      width: 90vw;
      height: 100%;
      max-width: 1440px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;


      .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 3rem;
        @media screen and (max-width:900px){
            justify-content: center;
            position: relative;
        }

        h2{
            font-weight: 400;
            font-size: 5rem;
            line-height: 3.75rem;
            width: 30%;
            @media screen and (max-width:1280px){
                font-size: 4rem;
                line-height: 3rem;
            }
            @media screen and (max-width:900px){
                position: absolute;
                font-size: 6rem;
                line-height: 4rem;
                translate: -42%;
                bottom: 8rem;
                z-index: 0;
                opacity: 0.2;
            }
            @media screen and (max-width:500px){
                display: none;
            }
            span{
                font-weight: 700;
                color: #8280FF;

                text-shadow: -4px 3px  #fff;
            }
        }

        .blank{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40%;
            height: 24rem;
            @media screen and (max-width:900px){
                width: 70%;
            }
            @media screen and (max-width:500px){
             width: 80%;
            }

            .select{
                display: flex;
                align-items: center;
                width: 60%;
                margin: 0 auto;
                @media screen and (max-width:1280px){
                    width: 100%;
                }
                @media screen and (max-width:900px){

                }
                .btn{
                    border: none;
                    background: transparent;
                    padding: 1rem;
                    cursor: pointer;
                    z-index: 5;
                }
                .arrowLeft{
                    rotate: -90deg;
                    width: 42px;
                    height: 42px;
                }
                .spacePerson{
                    
                    width: 100%;
                }
                .arrowRigth{
                    rotate: 90deg;
                    width: 42px;
                    height: 42px;
                }
            }
        }

        .info{
            width: 30%;
            background: #841BB6;
            border-radius: 30px;
            @media screen and (max-width:900px){
                display: none;
            }
            
            h3{
                font-weight: 500;
                font-size: 20px;
                line-height: 60px;

                text-align: center;
            }

            .description{
                background: #450E5E;
                border-radius: 30px;
                padding: 1.25rem;
                color: #CDC9CF;
                height: 18rem;
                @media screen and (max-width:1280px){
                    overflow-y: scroll;
                }
                

                h4{
                    border-bottom: 1px solid #CDC9CF;
                    display: flex;
                    align-items: flex-start;
                    padding-bottom: 1rem;
                    gap: 10px;
                    font-weight: 400;

                    font-size: 20px;
                    line-height: 20px;
                                    
                    flex: none;
                    order: 0;
                    flex-grow: 0;
                }
                p{
                    font-weight: 400;
                    font-size: 15px;
                    line-height: 18px;
                    margin-top: 1rem;
                    height: 100%;
                }
            }
        }
      }

      .carousel_carrinho{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .data{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            padding-top: 3rem;
            margin-top: -3rem;

            .circle{
                position: absolute;
                width: 32rem;
                height: 18rem;
                border-top-left-radius: 18rem;
                border-top-right-radius: 18rem;
                position: absolute;
                background: #F0F0F0;
                box-shadow: 2px -32px 10px #300843;
                z-index: -1;
                @media screen and (max-width:32rem){
                    width: 100vw;
                }
            }

            strong{
                font-weight: 500;
                font-size: 32px;
                line-height: 29px;

                text-align: center;

                color: #000000;  
                margin: 1rem 0;
            }
            .quantidade{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;

                img{
                    cursor: pointer;
                    z-index: 5;
                }

                p{
                    font-weight: 400;
                    font-size: 24px;
                    line-height: 29px;

                    text-align: center;

                    color: #000000;
                }
            }
            .carrinhoAdd{
                height: 4rem;
                z-index: 5;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: .5rem;
                filter: drop-shadow(0 0 0.3rem #DBABF2);
                
                .card{
                    display: flex;
                    margin-top: 1rem;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    z-index: 5;
                    opacity: 1;
                    visibility: visible;
                    height: 4rem;
                    width: 4rem;
                    background-color: #fff;
                    border-radius: 50%;
                    transition: all .4s linear;

                    svg{
                        width: 2.5rem;
                        height: 2.5rem;
                        transition: all .4s linear;

                    }
                    p{
                        opacity: 0;
                        visibility: hidden;
                        overflow: hidden;
                        width: 0;
                        color: #000000;
                        font-weight: bold;
                        transition: opacity .4s linear, visible 0.2s linear;
                        transition-delay: .3s;

                    }
                }
                .card.addcard{
                    background: #841BB6;
                    width: 15rem;
                    border-radius: 2rem;
                    svg{
                        width: 0;
                        height: 0;
                        opacity: 0;
                        visibility: hidden;
                        width: 0;
                        color: #000000;
                    }
                    p{
                        opacity: 1;
                        visibility: visible;
                        width: auto;
                        color: #000000;                        
                    }
                }
            }

        }

      }
    }

    .background1{
        position: absolute;
        left: 0%;
        top: 18.16%;

        opacity: 0.5;
        @media screen and (max-width:650px){
            display: none;
        }
    }
    .background3{
        position: absolute;
        left: 20.75%;
        top: 30.45%;

        opacity: 0.3;
        @media screen and (max-width:650px){
            display: none;
        }
        
    }
    .background2{
        position: absolute;
        left: 30.88%;
        top: 18.52%;

        opacity: 0.6;
        transform: rotate(45deg);
        @media screen and (max-width:650px){
            display: none;
        }
    }
    .background4{
        position: absolute;
        right: 0;
        top: 10.04%;
        @media screen and (max-width:650px){
            display: none;
        }
    }

`