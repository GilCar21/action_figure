import background1 from '../assets/imgBackground01.svg'
import background2 from '../assets/imgBackground02.svg'
import background3 from '../assets/imgBackground03.svg'
import background4 from '../assets/imgBackground04.svg'
import { MainContent } from '../styled/Main'

import arrow from '../assets/arrow.svg'


import { figures } from '../figures'

import card from '../assets/card.png'
import botaoMenos from '../assets/botaoMenos.svg'
import botaoMais from '../assets/botaoMais.svg'
import {
     SetStateAction, useEffect, useState } from 'react'
import { Carousel } from './Corousel'

interface MainProps{
    setMove: (value: SetStateAction<number>) => void;
    setAdd: (value: SetStateAction<number>) => void;
    move: number;
}

export function Main({setMove,setAdd, move}:MainProps) {
    
    
    const tamanho = figures.length 
    const metadeTamanho = Math.round(tamanho/2)
    
    const [amount, setAmount] = useState(1)
    const [isTrasitionNone, setIsTramsitionNone ] = useState(false)
    const [startPosition, setStartPosition] = useState(0)
    const [select, setSelect] = useState(metadeTamanho)
    useEffect(()=>{
        if(tamanho%2 === 0){
            setStartPosition(102)
            setMove(102)
        }

    },[])
    
    useEffect(() => {
        if (move-startPosition === 0) {

            setSelect(prev => prev = metadeTamanho)

        } else if (((move-startPosition) < metadeTamanho*206) && ((move-startPosition) > (tamanho%2 ===0 ? -metadeTamanho*206-1: -metadeTamanho*206))) {

            setSelect(prev => prev = -((move-startPosition )/206) + metadeTamanho )
            

        } else if (move-startPosition >= metadeTamanho*206) {

            setSelect(prev => prev = -((move-startPosition) / 206) + (metadeTamanho+tamanho))

        } else if (move <= -metadeTamanho*206) {

            setSelect(prev => prev = -((move-startPosition) / 206) - (-metadeTamanho+tamanho))

        }

        if (move-startPosition <= -tamanho*206 || move-startPosition >= tamanho*206) { 
            setTimeout(()=> {
                setMove(prev => prev = startPosition)
                setIsTramsitionNone(prev => prev = true)
            },400)
            setTimeout(()=> setIsTramsitionNone(prev => prev = false),450)
        }
        
    }, [move])

    function moveRigth() {
        setMove(prev => prev = prev - 206)
    }
    function moveLeft() {
        setMove(prev => prev = prev + 206)
    }
    function amountItens(){
        if(amount >1){
            setAmount(prev => prev = prev - 1)
        }
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
                            <div className='person'></div>
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

                        {figures.map(figure =>{
                            if(select === figure.position){
                                return(
                                    <strong key={figure.position} className='price'>{figure.price * amount}R$</strong>
                                )
                            }
                        })}
                        

                        <div className='quantidade'>
                            <img onClick={amountItens} src={botaoMenos} alt="" />
                            <p>{amount}</p>
                            <img 
                                onClick={()=> setAmount(prev => prev = prev + 1)} 
                                src={botaoMais}
                                alt="" 
                            />
                        </div>

                        <img onClick={()=>setAdd(prev => prev= prev+amount)} className='card' src={card} alt="carrinho" />

                        <div className='circle'></div>

                    </div>
                    <Carousel 
                        isTrasitionNone={isTrasitionNone} 
                        select={select} 
                        move={move}
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