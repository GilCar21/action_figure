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
        input{
            display: none;
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