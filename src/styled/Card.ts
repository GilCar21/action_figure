import styled from "styled-components";

export const ContentCard = styled.div`
    min-height: 100vh;
    background: #CFC5D3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: relative,;
    

    .aviso{
        position: absolute;
        right: 0;
        top: 8rem;
        width: 0;
        height: 3.2rem;
        background: #d83147;
        color: #F0F0F0;
        font-weight: bolder;
        padding: 0.5rem .75rem;
        border-radius: 8px;
        overflow: hidden;
        visibility: hidden;
        transition: width .3s linear, visibility .3s linear, position .3s linear;
    }
    .aviso.active{
        right: 3rem;
        width: 14rem;
        visibility: visible;
    }
    .header{
        width: 100%;
        height: 98px;
        background: #240731;
        margin-bottom: 2rem;

        .contentHeader{
            margin: 0 auto;
            height: 100%;
            width: 90%;
            max-width: 40rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            
           
            svg{
                color: #841BB6;
                z-index: 10;
                &:hover{
                    cursor: pointer;
                }
            }
        
        }
    }

    .itens{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        width: 90%;
        margin: 0 auto;

        .contentFigure{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            height: 100%;
            min-width: 190px;

            .figure{
                min-width: 190px;
                height: 220px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                
                .anime{
                    max-width: 60%;
                }
                .person{
                    min-height: 140px;
                    max-height: 140px;
                }
                p{
                    margin-top: -.5rem;
                    margin-bottom: .5rem;
                    text-align: center;
                    font-weight: 400;
                    font-size: 1.1rem;
                    line-height: 18px;
                }
            }
            strong{
                margin-top: -.5rem;
                font-weight: 700;
                font-size: 1.25rem;
                line-height: 18px;
            }
        }

        .quantidade{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                width: 90%;

                img{
                    cursor: pointer;
                    z-index: 5;
                }

                p{
                    font-weight: 400;
                    font-size: 1.5rem;
                    line-height: 18px;
                    text-align: center;

                    color: #000000;
                }
            }
    }
    .contentFimCompraAux{
        height: 150px;
        margin-top: 2rem;
    }
    .contentFimCompra{
        position: fixed;
        bottom: 0;
        width: 100%;
        padding: 0 5%;
        background: #F0F0F0;
        z-index: 10;
        filter: drop-shadow(0 -2mm 2mm #450E5E99);
        .fimCompra{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            max-width: 40rem;
            margin: 1rem auto 2rem;
            
    
            .total{
                display: flex;
                align-items: center;
                justify-content: space-between;

                div{
                    text-align: end;
                    strong{
                        display: block;
                    }
                    span{
                        display: block;
                    }
                }
            }
            button{
                border: 0;
                background: #841BB6;
                color: #FFF;
                width: 100%;
                height: 3rem;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bolder;
                font-size: 1.1rem;
                transition: all .2s;

                &:hover{
                    scale: 1.1;
                    cursor: pointer;
                }
            }
        }

    }
    

`