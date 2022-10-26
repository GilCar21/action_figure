import { useContext, useState } from 'react';
import { figures } from '../figures'

import { AiOutlineClose } from 'react-icons/ai'
import { BsCart3 } from 'react-icons/bs'

import botaoMenos from '../assets/botaoMenos.svg'
import botaoMais from '../assets/botaoMais.svg'

import { ContentCard } from '../styled/Card'
import { CyclesContext } from '../App';

import { NavLink } from 'react-router-dom'

import { createGlobalStyle } from 'styled-components'

const CreateGlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-family: 'Montserrat';
    }
    button{
        font-family: 'Montserrat';
    }
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }
`

export function Cart() {

    const { productsCard, setProductsCard, user } = useContext(CyclesContext)

    let precoTotal = 0;

    const [alert, setAlert] = useState(false)

    function handleFimCompra(){
        if(user.name){
            console.log('ok')
        }else {
            setAlert( prev => prev = true)
            setTimeout(()=> {
                setAlert (prev => prev = false)
            },3500)
        }
    }

    return (

        <ContentCard>
            <CreateGlobalStyled />
            <div className={`aviso ${alert === true ? 'active' : ''}`}>Entre em uma conta para finalizar o pedido</div>
            <div className="header">
                <div className='contentHeader'>
                    <NavLink to="/" title="AiOutlineClose">
                        <AiOutlineClose size={24} />
                    </NavLink>
                    <BsCart3 size={24} />

                </div>
            </div>

            <div className="itens">

                {figures.map(figure => {
                    const p = productsCard.find(item => item.position === figure.position)
                    const newProductsCard = productsCard.filter(item => item.position !== figure.position)
                    if (p) {
                        precoTotal += figure.price * p.amount


                        return (
                            <div className='contentFigure' key={figure.position}>
                                <div className={`figure`} >
                                    <img className='anime' src={figure.anime} />
                                    <img className={`person`} src={figure.person} alt="figurinha" />
                                    <p>Action Figure {`${figure.namePerson} ${figure.nameAnime}`}</p>
                                </div>

                                <div className='quantidade'>
                                    <img onClick={() => (p.amount > 1 ? setProductsCard([...newProductsCard, { position: p.position, amount: p.amount - 1 }]) : setProductsCard(newProductsCard))} src={botaoMenos} alt="" />
                                    {/* sei que não é recomendado escrever a função dentro do onclick, lembrar de tirar dai assim como todas as outras*/}
                                    <p>{p.amount}</p>

                                    <img
                                        onClick={() => setProductsCard([...newProductsCard, { position: p.position, amount: p.amount + 1 }])}
                                        src={botaoMais}
                                        alt=""
                                    />
                                </div>
                                <strong>R$ {figure.price * p.amount}</strong>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='contentFimCompraAux'></div>
            <div className='contentFimCompra'>
                <div className='fimCompra'>
                    <div className='total'>
                        <p>Total do pedido</p>
                        <div>
                            <strong>R$ {precoTotal}</strong>
                            <small>Em ate 5X s/ juros</small>
                        </div>
                    </div>
                    <button onClick={handleFimCompra}>Finalizar pedido</button>
                </div>
            </div>
        </ContentCard>
    )
}