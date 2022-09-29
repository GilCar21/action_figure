import { BsSearch, BsCart3 } from 'react-icons/bs'
import { BiDownArrow } from 'react-icons/bi'
import { HeaderContent } from '../styled/Header'
import logo from '../assets/logotipo.svg'
import login from '../assets/login.svg'

export function Header(){

    return(
        <HeaderContent>
            <div className='content'>
                <div className='search'>
                    <BsSearch size={24}/>
                    <input type="text" />
                </div>

                <img src={logo} alt="" />

                <div className='login_card'>
                    <div className='login'>
                        <img src={login} alt="" />
                        <p>Olá, faça seu login ou cadastre-se <BiDownArrow size={15}/></p>
                    </div>
                    <div className='card'>
                        <BsCart3 size={24} color={'violet'}/>
                    </div>
                </div>

            </div>
        </HeaderContent>
    )
}