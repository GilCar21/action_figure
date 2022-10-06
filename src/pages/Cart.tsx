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
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export function Cart() {

    const { productsCard, setProductsCard } = useContext(CyclesContext)

    let precoTotal = 0;

    return (
        <ContentCard>
            <CreateGlobalStyled />
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
            <div className='contentFimCompra'>
                <div className='fimCompra'>
                    <div className='total'>
                        <p>Total do pedido</p>
                        <div>
                            <strong>R$ {precoTotal}</strong>
                            <small>Em ate 5X s/ juros</small>
                        </div>
                    </div>
                    <button>Finalizar pedido</button>
                </div>
            </div>
        </ContentCard>
    )
}