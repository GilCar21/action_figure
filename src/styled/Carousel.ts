import styled from "styled-components";

export const CarouselContent = styled.div`

        width: 100%;
        height:700px;
        user-select: none;
        flex-shrink: 0;
        overflow: hidden;
        margin-top: -36rem;
        z-index: 3;
        display: flex;
        gap: 1rem;

        @media screen and (max-width:1480px){
            width: 1120px;
            margin-left: auto;
            margin-right: auto;
        }
        @media screen and (max-width:1220px){
            width: 630px;
        }
        @media screen and (max-width:700px){
            width: 517px;
        }
        @media screen and (max-width:500px){
            width: 298px;
        }

    .carousel{
        display: flex;
        justify-content: center;
        gap: 1rem;
        width: 100%;
        height:630px;
        
        transform: translateX(${props => props.theme}px);
        transition: all .4s linear;
        
        .contentFigure{
            height: 100%;
            min-width: 190px;
            display: flex;
            align-items: flex-end;
        }
        .figure{
            min-width: 190px;
            height: 220px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            transition: margin .4s linear, scale .4s linear; 
            
            .anime{
                max-width: 60%;
                z-index: 3;
            }
            
            .person{
                min-height: 140px;
                max-height: 140px;
                opacity: 1;
                filter: drop-shadow(0 3mm 2mm #450E5E99);
                /* &::after{
                    content: '';
                    position: absolute;
                    background: #240731;
                    width: 100px;
                    height: 10px;
                    filter: blur(23px);
                } */
            }
        }
        .figure.select{
           margin-bottom: 19rem;
            scale: 1.75;
        }
    }
    .carousel.trasitionMove{
        transition: none;
    }
`