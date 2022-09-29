import background1 from '../assets/imgBackground01.svg'
import background2 from '../assets/imgBackground02.svg'
import background3 from '../assets/imgBackground03.svg'
import background4 from '../assets/imgBackground04.svg'
import { MainContent } from '../styled/Main'

import arrow from '../assets/arrow.svg'


import attackOnTita from '../assets/attackOnTita.png'
import mikasa from '../assets/mikasa.png'
import levi from '../assets/Levi.png'
import eren from '../assets/Eren.png'

import kimetsu from '../assets/kimetsu.png'
import zenitsu from '../assets/Zenitsu.png'
import inosuke from '../assets/Inosuke.png'

import thePromisedNeverland from '../assets/thePromisedNeverland.png'
import YakusokuNoNeverland from '../assets/YakusokuNoNeverland.png'
import emma from '../assets/Emma.png'

import card from '../assets/card.png'
import botaoMenos from '../assets/botaoMenos.svg'
import botaoMais from '../assets/botaoMais.svg'
import { useEffect, useState } from 'react'

export const figures = [
    {
        id: 'a',
        position: 1,
        anime: attackOnTita,
        person: mikasa,
        namePerson: 'Mikasa',
        nameAnime: 'Attack on Titta',
        price: 150,
        description: "O que acompanha o produto? 1 boneco Mikasa Ackerman Articulado; 1 capa removível; 1 DMT (Dispositivo de Manobras Tridimensional); 3 rostos alternativos intercambiáveis; 2 espadas; 2 efeitos de fumaça de disparo; 1 base pra exibição do boneco. Qual o tamanho do produto? Aproximadamente 15cm de altura. O produto é articulado? Sim, o produto é totalmente articulado. "
    },
    {
        id: 'b',
        position: 2,
        anime: attackOnTita,
        person: levi,
        namePerson: 'Levi',
        nameAnime: 'Attack on Titta',
        price: 145,
        description: "Boneco (Action Figure) Shingeki no Kyojin Levi Ackerman Item colecionável. Perfeito para decorar, colecionar ou presentear pessoas especiais para você! Além de um belo design, ainda conta com um excelente material de alta qualidade e resistência. Detalhes: Tamanho: 18cm Material: PVC"
    },
    {
        id: 'c',
        position: 3,
        anime: attackOnTita,
        person: eren,
        namePerson: 'Eren',
        nameAnime: 'Attack on Titta',
        price: 171,
        description: "O que acompanha o produto? 1 boneco Mikasa Ackerman Articulado; 1 capa removível; 1 DMT (Dispositivo de Manobras Tridimensional); 3 rostos alternativos intercambiáveis; 2 espadas; 2 efeitos de fumaça de disparo; 1 base pra exibição do boneco. Qual o tamanho do produto? Aproximadamente 15cm de altura. O produto é articulado? Sim, o produto é totalmente articulado. "
    },
    {
        id: 'd',
        position: 4,
        anime: kimetsu,
        person: zenitsu,
        namePerson: 'Zenitsu',
        nameAnime: "Kimetsu no Yiaba",
        price: 152,
        description: "Mini Action Figures feitas de PVC para os fãs do anime Kimetsu no Yaiba colecionarem em casa e terem sempre nostalgia, eternize seu personagem favorito ainda hoje, este é o ..."
    },
    {
        id: 'e',
        position: 5,
        anime: kimetsu,
        person: inosuke,
        namePerson: "Inosuke",
        nameAnime: "Kimetsu no Yiaba",
        price: 151,
        description: "ACTION FIGURE DEMON SLAYER ESCOLHA OS SEUS PERSONAGENS FAVORITOS E COLECIONE! CARACTERÍSTICAS Tamanho: cerca de 16 cm Material: PVC de alta qualidade Pacote do produto 1x Boneco Demon Slayer Action Figure a escolha Escolha o seu favorito e clique em COMPRAR agora!"
    },
    {
        id: 'f',
        position: 6,
        anime: thePromisedNeverland,
        person: YakusokuNoNeverland,
        namePerson: "The Promised Never Land",
        nameAnime: "Yakuso Ku No Never Land",
        price: 188,
        description: "..."
    },
    {
        id: 'g',
        position: 7,
        anime: thePromisedNeverland,
        person: emma,
        namePerson: "The Promised Never Land",
        nameAnime: "Emma",
        price: 133,
        description: "1pcs Anime The Promised Neverland Figure Set Emma Figure Brinquedos brinquedos brinquedos 13cm Action Figures Os produtos que enviamos são baseados principalmente na"
    },


]


export function Main() {

    const [move, setMove] = useState(0)
    const [select, setSelect] = useState(4)
    const [amount, setAmount] = useState(1)
    const [isTrasitionNone, setIsTramsitionNone ] = useState(false)
    // const [opacityLeft, setOpacityLeft] = useState(7)


    useEffect(() => {
        if (move === 0) {
            setSelect(prev => prev = 4)
        } else if (move != 0 && move < 824 && move > -824) {
            setSelect(prev => prev = -(move / 206) + 4)
        } else if (move >= 824) {
            setSelect(prev => prev = -(move / 206) + 11)
        } else if (move <= -824) {
            setSelect(prev => prev = -(move / 206) - 3)
        }

        if (move <= - 1442 || move >= 1442) { 
            setTimeout(()=> {
                setMove(prev => prev = 0)
                setIsTramsitionNone(prev => prev = true)
            },400)
            setTimeout(()=> setIsTramsitionNone(prev => prev = false),450)
            console.log(move)
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
        <MainContent theme={move}>
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
                                    <div className='description'>
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
                                    <strong className='price'>{figure.price * amount}R$</strong>
                                )
                            }
                        })}
                        

                        <div className='quantidade'>
                            <img onClick={amountItens} src={botaoMenos} alt="" />
                            <p>{amount}</p>
                            <img onClick={()=> setAmount(prev => prev = prev + 1)} src={botaoMais} alt="" />
                        </div>

                        <img className='card' src={card} alt="carrinho" />

                        <div className='circle'></div>

                    </div>
                    <div className='content_corousel'>

                        <div className={`carousel ${isTrasitionNone ? 'trasitionMove' : ''}`} >

                            {figures.map(figure => {
                                return (
                                    <div className={`figure ${figure.position === select ? 'select' : ''}`} key={figure.id}>

                                        <img className='anime' src={figure.anime} alt="" />

                                        <div className='person_shadow'>
                                            <img className={`person `} src={figure.person} alt="figurinha" />
                                            {/* <img className='shadow' src={figure.person} alt="figurinha" /> */}
                                        </div>
                                    </div>
                                )
                            })}
                            {figures.map(figure => {
                                return (

                                    <div className={`figure ${figure.position === select ? 'select' : ''}`} key={figure.id}>

                                        <img className='anime' src={figure.anime} alt="" />

                                        <div className='person_shadow'>
                                            <img className='person' src={figure.person} alt="figurinha" />
                                            {/* <img className='shadow' src={figure.person} alt="figurinha" /> */}
                                        </div>
                                    </div>
                                )
                            })}
                            {figures.map(figure => {
                                return (
                                    <div className={`figure ${figure.position === select ? 'select' : ''}`} key={figure.id}>

                                        <img className='anime' src={figure.anime} alt="" />

                                        <div className='person_shadow'>
                                            <img className='person' src={figure.person} alt="figurinha" />
                                            {/* <img className='shadow' src={figure.person} alt="figurinha" /> */}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>


                </div>

                <div className='glass'></div>

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