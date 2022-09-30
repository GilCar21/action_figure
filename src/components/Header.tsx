import { BsSearch, BsCart3 } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BiDownArrow } from 'react-icons/bi'
import { HeaderContent } from '../styled/Header'
import logo from '../assets/logotipo.svg'
import login from '../assets/login.svg'
import { KeyboardEvent, SetStateAction, useState } from 'react'
import { figures } from '../figures'

interface HeaderProps {
    setMove: (value: SetStateAction<number>) => void;
    add: number
}
export function Header({ setMove, add }: HeaderProps) {
    const [active, setActive] = useState(false)
    const [busca, setBusca] = useState('')



    function handleKeyPress(event:KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            Buscar()
        }
    }

    function Buscar() {

        const BuscaNameAnime = figures.filter(figure => figure.nameAnime.toLowerCase().includes(busca.toLowerCase()))

        if (busca != '') {
            if (BuscaNameAnime.length > 0) {
                let aux = BuscaNameAnime.at(0)?.position as number
                setMove((prev) => prev = -(aux - Math.round(figures.length / 2)) * 206)
            }

            const BuscaNamePerson = figures.filter(figure => figure.namePerson.toLowerCase().includes(busca.toLowerCase()))
            if (BuscaNamePerson.length > 0) {
                let aux = BuscaNamePerson.at(0)?.position as number
                setMove((prev) => prev = -(aux - Math.round(figures.length / 2)) * 206)
            }

        }


        setActive(false)
    }

    return (
        <HeaderContent >
            <div className='content'>
                <div className={`search ${active === true ? 'active' : ''}`}>
                    <BsSearch className='OpenSearch' onClick={() => setActive(prev => prev = !prev)} size={24} color={'#B652E5'} />
                    <BsSearch className='BsSearch' onClick={Buscar} size={24} color={'#B652E5'} />
                    <AiOutlineCloseCircle
                        className='close'
                        onClick={() => {
                            setActive(prev => prev = !prev)
                            setBusca('')
                        }}
                        size={30}
                        color={'#B652E5'}
                    />
                    <input
                        type="text"
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        placeholder="Digite aqui o que voce esta procurando"
                        onKeyPress={(event) => handleKeyPress(event)}
                    />
                </div>

                <img className='logo' src={logo} alt="" />

                <div className='login_card'>
                    <div className='login'>
                        <img src={login} alt="" />
                        <p>Olá, faça seu login ou cadastre-se <BiDownArrow size={15} /></p>
                    </div>
                    <div className='card'>
                        <BsCart3 size={24} color={'violet'} />
                        <p>{add}</p>
                    </div>
                </div>

            </div>
        </HeaderContent>
    )
}