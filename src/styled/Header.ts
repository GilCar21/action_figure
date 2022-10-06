import styled from "styled-components";


export const HeaderContent = styled.div`
    width: 100%;
    background: #F0F0F0;
    .content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1440px;
        width: 100%;
        height: 5rem;
        margin: 0 auto;
    }

    .search{
        padding: 0 1rem;
        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: start;
        width: 365px;
        
        @media screen and (max-width:900px){
            width: 30%;
        }

        .OpenSearch{
            cursor: pointer;
            display: block;
        }
        .BsSearch{
            cursor: pointer;
            display: none;
        }
        .close{
            cursor: pointer;
            visibility: hidden;
            opacity: 0;
            transition: all .2s linear;
            margin-left: -.25rem;
        }
        input{
            visibility: hidden;
            opacity: 0;
            border: solid 2px #B652E5;
            border-radius: 1rem;
            width: 0%;
            height: 2.5rem;
            padding: 0.5rem 0.5rem 0.5rem .5rem;
            font-weight: 400;
            transition: visibility .2s linear, opacity .2s linear, width .2s linear;
        }

    }
    .search.active{
        min-width: 365px;
        @media screen and (max-width:500px){
            width: 90%;
        }
        .OpenSearch{
            display: none;
        }
        .BsSearch{
            display: block;
        }
        .close{
            visibility: visible;
            opacity: 1;
        }
        input{
            visibility: visible;
            width: 100%;
            opacity: 1;
           
            &:focus{
                border: solid 1px #B652E5;
            }
        }
    }

    

    .login_card{
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 2rem;
        height: 5rem;


        @media screen and (max-width:900px){
            width: 30%;
        }

        .login{
            color: #450E5E;
            display: flex;
            align-items: center;
            gap: .5rem;
            width: 12rem;
            height: 27px;
            @media screen and (max-width:900px){
                    justify-content: end;
                    margin-right: -2rem;
                    width: 40%;
            }

            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            p{
               font-size: 11;
               @media screen and (max-width:900px){
                    visibility: hidden;
                    opacity: 0;
                    width: 0;
                }
            }
        }
        .card{
            background: #150031;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 120px;
            height: 5rem;
            border-radius: 12px;
            position: relative;
            z-index: 10;
                &:hover{
                    cursor: pointer;
                }
            p{
                position: absolute;
                width: 15px;
                height: 15px;
                background-color: #DBABF2;
                border-radius: 50%;
                translate: 50% -50%;
                font-weight: 400;
                color: #000;
                font-size: 10px;
                text-align: center;
            }
            @media screen and (max-width:1440px){
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
            }
            @media screen and (max-width:740px){
                min-width: 75px;
            }
        }
    }
    @media screen and (max-width:750px){
        .search.active ~ .login_card{
            display: none;
        }
        .search.active ~ .logo{
            padding-right: 1rem;
        }
    }
    @media screen and (max-width:500px){
        .search.active ~ .logo{
            display: none;
        }
    }
`