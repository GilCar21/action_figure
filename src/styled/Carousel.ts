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
`