import { BsSearch, BsCart3 } from 'react-icons/bs'
import { BiDownArrow } from 'react-icons/bi'
import { HeaderContent } from '../styled/Header'
import logo from '../assets/logotipo.svg'
import login from '../assets/login.svg'
import { KeyboardEvent, SetStateAction, useContext, useState } from 'react'
import { figures } from '../figures'

import { NavLink } from 'react-router-dom'
import { CyclesContext } from '../App'

interface HeaderProps {
    setMoveCarousel: (value: SetStateAction<number>) => void;
}

export function Header({ setMoveCarousel }: HeaderProps) {
    const [active, setActive] = useState(false)
    const [busca, setBusca] = useState('')

    const { productsCard, cardActive, setCardActive } = useContext(CyclesContext)

    function handleKeyPress(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            Buscar()
        }
    }

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Escape") {
            setActive(prev => prev = false)
        }
    }

    function Buscar() {

        const BuscaNameAnime = figures.filter(figure => figure.nameAnime.toLowerCase().includes(busca.toLowerCase()))

        if (busca != '') {
            if (BuscaNameAnime.length > 0) {
                let aux = BuscaNameAnime.at(0)?.position as number
                setMoveCarousel((prev) => prev = -(aux - Math.round(figures.length / 2)) * 206)
            }

            const BuscaNamePerson = figures.filter(figure => figure.namePerson.toLowerCase().includes(busca.toLowerCase()))
            if (BuscaNamePerson.length > 0) {
                let aux = BuscaNamePerson.at(0)?.position as number
                setMoveCarousel((prev) => prev = -(aux - Math.round(figures.length / 2)) * 206)
            }
        }
        setActive(false)
    }

    return (
        <HeaderContent >
            <div className='content'>
                <div className={`search ${active === true ? 'active' : ''}`}>
                    <BsSearch className='OpenSearch' onClick={() => setActive(prev => prev = !prev)} size={28} color={'#B652E5'} />
                    <BsSearch
                        className='BsSearch'
                        onClick={Buscar}
                        size={28}
                        color={'#B652E5'}
                    />

                    <input
                        type="text"
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        placeholder="Digite aqui o que voce esta procurando"
                        onKeyPress={(event) => handleKeyPress(event)}
                        onKeyDown={event => handleKeyDown(event)}
                    />
                </div>

                <img className='logo' src={logo} alt="" />

                <div className='login_card'>
                    <div className='login'>
                        <img src={login} alt="" />
                        <p>Olá, faça seu login ou cadastre-se <BiDownArrow size={15} /></p>
                    </div>
                    <NavLink to="/cart" title="cart">
                        <div className='card' onClick={() => setCardActive(prev => prev = true)}>
                            <BsCart3 size={24} color={'violet'} />
                            <p>{productsCard.length}</p>
                        </div>
                    </NavLink>
                </div>

            </div>
        </HeaderContent>
    )
}