import styled from "styled-components";


export const HeaderContent = styled.div`
    width: 100%;
    background: #F0F0F0;
    .content{
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1440px;
        height: 100%;
        margin: 0 auto;
    }

    .search{
        padding: 0 2rem;
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: start;
        position: relative;

        .OpenSearch{
            cursor: pointer;
            position: absolute;
            left: 2.5rem;
            visibility: visible;
            opacity: 1;
        }
        .BsSearch{
            cursor: pointer;
            position: absolute;
            left: 2.5rem;
            visibility: hidden;
            opacity: 0;
        }
        .close{
            cursor: pointer;
            position: absolute;
            left: 2.5rem;
            visibility: hidden;
            opacity: 0;
            transition: all .2s linear;
        }
        input{
            visibility: hidden;
            opacity: 0;
            border: solid 1px #B652E5;
            border-radius: 1rem;
            width: 0%;
            height: 2.5rem;
            padding: 0.5rem 0.5rem 0.5rem 2.2rem;
            font-weight: 400;
            transition: visibility .2s linear, opacity .2s linear, width .2s linear;
        }

    }
    .search.active{
        padding: 0 2rem;
        width: 30%;
        .OpenSearch{
            visibility: hidden;
            opacity: 0;
        }
        .BsSearch{
            visibility: visible;
            opacity: 1;
        }
        .close{
            visibility: visible;
            opacity: 1;
            left: 75%;
        }
        input{
            visibility: visible;
            width: 90%;
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
        width: 30%;

        .login{
            color: #450E5E;
            display: flex;
            align-items: center;
            gap: .5rem;
            width: 12rem;
            height: 27px;

            filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
            p{
               font-size: 11;
            }
        }
        .card{
            background: #150031;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 120px;
            height: 100%;
            border-radius: 12px;
            /* border-top-left-radius: 12px;
            border-bottom-left-radius: 12px; */
        }
    }
`