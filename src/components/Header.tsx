import { BsSearch, BsCart3 } from 'react-icons/bs'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BiDownArrow } from 'react-icons/bi'
import { HeaderContent } from '../styled/Header'
import logo from '../assets/logotipo.svg'
import login from '../assets/login.svg'
import { SetStateAction, useState } from 'react'
import { figures } from '../figures'

interface HeaderProps{
    setMove: (value: SetStateAction<number>) => void;
}
export function Header({setMove}:HeaderProps) {
    const [active, setActive] = useState(false)
    const [busca, setBusca] = useState('')

    

    function Buscar(){
        
        const BuscaNameAnime = figures.filter(figure => figure.nameAnime.toLowerCase().includes(busca.toLowerCase()))      
        if(BuscaNameAnime.length > 0){
            let aux = BuscaNameAnime.at(0)?.position as number
            console.log(aux)
            setMove((prev )=> prev = -(aux-Math.round(figures.length/2))*206)
        }

        const BuscaNamePerson = figures.filter(figure => figure.namePerson.toLowerCase().includes(busca.toLowerCase()))
        if(BuscaNamePerson.length > 0){
            let aux = BuscaNamePerson.at(0)?.position as number
            setMove((prev )=> prev = -(aux-Math.round(figures.length/2))*206)
        } 
    }

    return (
        <HeaderContent >
            <div className='content'>
                <div className={`search ${active === true ? 'active' : ''}`}>
                    <BsSearch className='OpenSearch' onClick={() => setActive(prev => prev = !prev)} size={24} color={'#B652E5'}/>
                    <BsSearch className='BsSearch' onClick={Buscar} size={24} color={'#B652E5'}/>
                    <AiOutlineCloseCircle 
                        className='close' 
                        onClick={() => {
                            setActive(prev => prev = !prev)
                            setBusca('')
                        }} 
                        size={26} 
                        color={'#B652E5'}
                    />
                    <input
                        type="text"
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        placeholder="Digite aqui o que voce esta procurando"
                    />
                </div>

                <img src={logo} alt="" />

                <div className='login_card'>
                    <div className='login'>
                        <img src={login} alt="" />
                        <p>Olá, faça seu login ou cadastre-se <BiDownArrow size={15} /></p>
                    </div>
                    <div className='card'>
                        <BsCart3 size={24} color={'violet'} />
                    </div>
                </div>

            </div>
        </HeaderContent>
    )
}