import { MenuContent } from '../styled/Menu'
import arrow from '../assets/arrow.svg'
import { useState } from 'react'

export function Menu(){

    const [active, setActive] = useState(false);

    return(

        <MenuContent theme={active === true ? 'visible' : 'hidden'}>

            <div className='categoria anime'>
                <div className='title' onClick={()=> setActive((prevActive)=> !prevActive)}>
                    Animes
                    <img src={arrow} alt="" />
                </div>
                <ul className='animes'>
                    <li>Kimetsu no yaiba</li>
                    <li>Attack on titan</li>
                    <li>The promised neverland</li>
                    <li>Naruto shippuden</li>
                    <li>World trigger</li>
                </ul>

            </div>
        </MenuContent>
    )
}