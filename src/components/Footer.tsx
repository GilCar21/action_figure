import styled from "styled-components"
import seme from "../assets/seme.png"

const FooterContent = styled.footer`
    background: #19171A;
    width: 100%;
    color: #CDC9CF;
    padding: 1rem 0;
    margin-top: -2.75rem;

    img{
        margin-top: -5rem;
        width: 100%;
        height: 75px;
        
    }

    .container{
        max-width: 1440px;
        width: 90%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

        div{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: start;

            h3{
                color: #B652E5;
                font-weight: 700;
                font-size: 15px;
                line-height: 3rem;
            }
            p{
                font-weight: 700;
                font-size: 12px;
                line-height: 1.5rem;
            }
        }
    }

`
export function Footer() {

    return (
        <FooterContent>
            <img src={seme} alt="" />
            <div className="container">
                <div>
                    <h3>Institucional</h3>

                    <p>Sobre a empresa</p>
                </div>
                <div>
                    <h3>Dúvidas</h3>

                    <p>Ajuda</p>
                    <p>Politica de privacidade</p>
                    <p>Politica de troca de garantia</p>
                    <p>Pagamento e envio</p>
                </div>
                <div>
                    <h3>contato</h3>

                    <p>Atendimento</p>
                    <p>Duvidas?</p>
                    <p>Fale com nosco</p>
                </div>
                <div>
                    <h3>Receba naovidades</h3>

                    <p>Assine e receba novdades semre em primeira mão:</p>
                </div>
            </div>
        </FooterContent>
    )
}