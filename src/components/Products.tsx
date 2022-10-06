import { SetStateAction, useContext, useEffect, useState } from 'react'

import { figures } from '../figures'

import background1 from '../assets/imgBackground01.svg'
import background2 from '../assets/imgBackground02.svg'
import background3 from '../assets/imgBackground03.svg'
import background4 from '../assets/imgBackground04.svg'
import botaoMenos from '../assets/botaoMenos.svg'
import botaoMais from '../assets/botaoMais.svg'
import arrow from '../assets/arrow.svg'
import { BsCart3 } from 'react-icons/bs'

import { MainContent } from '../styled/Products'
import { Carousel } from './Corousel'
import { CyclesContext } from '../App'

interface ProductsProps {
    setMoveCarousel: (value: SetStateAction<number>) => void;
    moveCarousel: number;
    amount: number;
    setAmount: (value: SetStateAction<number>) => void;
}

export function Products({ setMoveCarousel, moveCarousel, setAmount, amount }: ProductsProps) {
    
    const { productsCard, setProductsCard } = useContext(CyclesContext)

    const tamanho = figures.length
    const metadeTamanho = Math.round(tamanho / 2)
  
    const [isTrasitionNoneCarousel, setIsTramsitionNoneCarousel] = useState(false)
    const [startPosition, setStartPosition] = useState(0)
    const [isAddCard, setIsAddCard] = useState(false)
    const [select, setSelect] = useState(metadeTamanho)

    useEffect(() => {
        if (tamanho % 2 === 0) {
            setStartPosition(102)
            setMoveCarousel(102)
        }

    }, [])

    useEffect(() => {
        if (moveCarousel - startPosition === 0) {

            setSelect(prev => prev = metadeTamanho)

        } else if (((moveCarousel - startPosition) < metadeTamanho * 206) && ((moveCarousel - startPosition) > (tamanho % 2 === 0 ? -metadeTamanho * 206 - 1 : -metadeTamanho * 206))) {

            setSelect(prev => prev = -((moveCarousel - startPosition) / 206) + metadeTamanho)


        } else if (moveCarousel - startPosition >= metadeTamanho * 206) {

            setSelect(prev => prev = -((moveCarousel - startPosition) / 206) + (metadeTamanho + tamanho))

        } else if (moveCarousel <= -metadeTamanho * 206) {

            setSelect(prev => prev = -((moveCarousel - startPosition) / 206) - (-metadeTamanho + tamanho))
        }

        if (moveCarousel - startPosition <= -tamanho * 206 || moveCarousel - startPosition >= tamanho * 206) {
            setTimeout(() => {
                setMoveCarousel(prev => prev = startPosition)
                setIsTramsitionNoneCarousel(prev => prev = true)
            }, 400)
            setTimeout(() => setIsTramsitionNoneCarousel(prev => prev = false), 450)
        }

    }, [moveCarousel])

    function moveRigth() {
        setMoveCarousel(prev => prev = prev - 206)
    }
    function moveLeft() {
        setMoveCarousel(prev => prev = prev + 206)
    }
    function removeItens() {
        if (amount > 1) {
            setAmount(prev => prev = prev - 1)
        }
    }

    function AddProductCard() {
        setIsAddCard(prev => true)
        let auxAmount = 0

        if (productsCard.length === 0) {
            setProductsCard([{ position: select, amount }])
        }

        const itens = productsCard.filter(item => {
            if (select === item.position) {
                auxAmount = item.amount + amount
            } else {
                return item
            }
        })
        setProductsCard([...itens, { position: select, amount: (auxAmount === 0 ? amount : auxAmount)}])

        setTimeout(() => {
            setIsAddCard(prev => false)
        }, 1500)
    }

    return (
        <MainContent>
            <div className='content'>
                <div className='container'>

                    <h2>
                        adquira seu <br />
                        <span>colecio <br /> navel
                        </span>
                    </h2>

                    <div className='blank'>
                        <div className='select'>
                            <button className='btn' onClick={moveLeft}>
                                <img className='arrowLeft' src={arrow} />
                            </button>
                            <div className='spacePerson'></div>
                            <button className='btn' onClick={moveRigth}>
                                <img className='arrowRigth' src={arrow} alt="" />
                            </button>
                        </div>
                    </div>

                    <div className='info'>

                        <h3>Informações</h3>


                        {figures.map(figure => {
                            if (select === figure.position) {
                                return (
                                    <div className='description' key={figure.position}>
                                        <h4>Action Figure {`${figure.namePerson} ${figure.nameAnime}`}
                                        </h4>
                                        <p>{figure.description} </p>
                                    </div>
                                )

                            }
                        })}

                    </div>
                </div>

                <div className='carousel_carrinho'>

                    <div className='data'>

                        {figures.map(figure => {
                            if (select === figure.position) {
                                return (
                                    <strong key={figure.position} className='price'>R${figure.price * amount}</strong>
                                )
                            }
                        })}


                        <div className='quantidade'>
                            <img onClick={removeItens} src={botaoMenos} alt="" />
                            <p>{amount}</p>
                            <img
                                onClick={() => setAmount(prev => prev = prev + 1)}
                                src={botaoMais}
                                alt=""
                            />
                        </div>

                        <div className='carrinhoAdd'>
                            <div className={`card ${isAddCard === true ? 'addcard' : ''}`}>
                                <p>Adicionado com sucesso!</p>
                                <BsCart3 className='carrinhoSvg' onClick={AddProductCard} color='#B652E5' />
                            </div>
                        </div>

                        <div className='circle'></div>

                    </div>
                    <Carousel
                        isTrasitionNoneCarousel={isTrasitionNoneCarousel}
                        select={select}
                        moveCarousel={moveCarousel}
                    />
                </div>
            </div>



            <div>
                <div className="background1">
                    <img src={background1} alt="" />
                </div>
                <div className="background2">
                    <img src={background2} alt="" />
                </div>
                <div className="background3">
                    <img src={background3} alt="" />
                </div>
                <div className="background4">
                    <img src={background4} alt="" />
                </div>
            </div>
        </MainContent>
    )
}