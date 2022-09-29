import styled from "styled-components";
import { figures } from "../components/Main";


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

        h2{
            font-weight: 400;
            font-size: 80px;
            line-height: 60px;
            width: 30%;
            span{
                font-weight: 700;
                font-size: 72px;
                line-height: 60px;
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
            .select{
                display: flex;
                align-items: center;
                width: 60%;
                margin: 0 auto;
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
                .person{
                    
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
                height: 16rem;

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
           

        }
        .content_corousel{
            width: 100%;
            height:700px;
            user-select: none;
            flex-shrink: 0;
            overflow: hidden;
            margin-top: -36rem;
            z-index: 3;
        }

        .carousel{
            display: flex;
            justify-content: center;
            gap: 1rem;
            width: 100%;
            height:630px;
            

            transform: translateX(${props => props.theme}px);

            transition: all .4s linear;

            .figure{
                min-width: 190px;
                max-height: 160px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                margin-top: auto;
                margin-bottom: 1rem;
                transition: margin .4s linear, scale .4s linear; 

                .anime{
                    max-width: 60%;
                }
                
                .person{
                    width: 100%;
                    opacity: 1;
                    filter: drop-shadow(4px 10px #45455888 );
                    img{
                        width: 100%;
                    }
                }
                .person.opacity{
                    opacity: 0;
                }
            }
            .figure.select{
               margin-bottom: 20rem;
                scale: 1.75;
            }
        }
        .carousel.trasitionMove{
            transition: none;
        }

      }
    }

    .background1{
        position: absolute;
        left: 0%;
        top: 18.16%;

        opacity: 0.5;
    }
    .background3{
        position: absolute;
        left: 20.75%;
        top: 30.45%;

        opacity: 0.3;
        
    }
    .background2{
        position: absolute;
        left: 30.88%;
        top: 18.52%;

        opacity: 0.6;
        transform: rotate(45deg);
    }
    .background4{
        position: absolute;
        right: 0;
        top: 10.04%;
    }

`