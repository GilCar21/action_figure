import styled from "styled-components";

export const MenuContent = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #450E5E;
    color: #fff;
    width: 100%;
    height: 58px;

    
    .anime{
        position: relative;
    }

    .title{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        z-index: 5;
        /* identical to box height */


        color: #FFFFFF;
        cursor: pointer;

        border-bottom: solid 3px ${props => props.theme === 'visible' ? '#DBABF2' : 'transparent'};

        img{
            rotate: ${props => props.theme === 'visible' ? 0 : '180deg'};
            transition: rotate .3s linear;
        }
    }

    ul{
        visibility:  ${props => props.theme};
        opacity: ${props => props.theme === 'visible' ? 1 : 0};
        text-align: center;
        margin-top: 5px;
        translate: -37.5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 25px;
        gap: 10px;
        z-index: 10;

        color: #343036;
        position: absolute;
        width: 491px;
        height: 350px;

        background: #F0F0F0;
        border-radius: 20px;

        transition: visibility 0.3s linear,opacity 0.3s linear;

        &::before{
            position: absolute;
            top: -14px;
            content: '';
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            border-bottom: 15px solid #F0F0F0;
        }

        li{
            padding: 10px;
            list-style: none;

            font-weight: 400;
            font-size: 24px;
            line-height: 29px;

            width: 295px;
            height: 49px;

        /* Cinza / 05 */

            border-bottom: 1px solid #CDC9CF;
            
            &:hover{
                scale: 1.1;
                cursor: pointer;
            }
        }
    }
`