import { MenuContent } from '../styled/Menu'
import arrow from '../assets/arrow.svg'
import { SetStateAction, useState } from 'react'
import { figures } from '../figures';

interface MenuProps{
    setMoveCarousel: (value: SetStateAction<number>) => void;
}
export function Menu({setMoveCarousel}:MenuProps){

    const [active, setActive] = useState(false);

    function BuscaAnime(anime:string){
        let Amine = figures.filter(figure => figure.nameAnime === anime);
        let aux = Amine.at(0)?.position as number
        setMoveCarousel((prev )=> prev = -(aux-Math.round(figures.length/2))*206)
        setActive(false)
    }

    function handleClickClose(){
        setActive(false)
    }

    return(

        <MenuContent theme={active === true ? 'visible' : 'hidden'}>

            <div className='categoria anime'>
                <div className='title' onClick={()=> setActive((prevActive)=> !prevActive)} >
                    Animes
                    <img src={arrow} alt="" />
                </div>
                
                <ul className='animes'>
                    <li onClick={()=> BuscaAnime('Kimetsu no Yiaba')}>Kimetsu no yaiba</li>
                    <li onClick={()=> BuscaAnime('Attack on Titta')}>Attack on titan</li>
                    <li onClick={()=> BuscaAnime('The Promised Never Land')}>The promised neverland</li>
                </ul>

                <div className={`clickClose ${active === true ? 'active' : ''}`} onClick={handleClickClose} ></div>
            </div>
        </MenuContent>
    )
}