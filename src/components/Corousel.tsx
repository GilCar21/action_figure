import { figures } from "../figures"
import { CarouselContent } from "../styled/Carousel";

interface CorouselProps {
    isTrasitionNone: boolean;
    select: number;
    move: number;
}

export function Carousel({ isTrasitionNone, select, move }: CorouselProps) {

    return (
        <CarouselContent theme={move}>
            <div className={`carousel ${isTrasitionNone ? 'trasitionMove' : ''}`} >

                {figures.map(figure => {
                    return (
                        <div className="contentFigure" key={figure.position}>
                            <div className={`figure ${figure.position === select ? 'select' : ''}`} >

                                <img className='anime' src={figure.anime} alt="" />
                                <img className={`person `} src={figure.person} alt="figurinha" />
                            </div>
                        </div>
                    )
                })}
                {figures.map(figure => {
                    return (
                        <div className="contentFigure" key={figure.position}>
                            <div className={`figure ${figure.position === select ? 'select' : ''}`} key={figure.position}>

                                <img className='anime' src={figure.anime} alt="" />

                                <img className='person' src={figure.person} alt="figurinha" />
                            </div>
                        </div>
                    )
                })}
                {figures.map(figure => {
                    return (
                        <div className="contentFigure" key={figure.position}>
                            <div className={`figure ${figure.position === select ? 'select' : ''}`} key={figure.position}>

                                <img className='anime' src={figure.anime} alt="" />
                                <img className='person' src={figure.person} alt="figurinha" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </CarouselContent >
    )
}