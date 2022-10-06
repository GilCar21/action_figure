import { figures } from "../figures"
import { CarouselContent } from "../styled/Carousel";

interface CorouselProps {
    isTrasitionNoneCarousel: boolean;
    select: number;
    moveCarousel: number;
}

export function Carousel({ isTrasitionNoneCarousel, select, moveCarousel }: CorouselProps) {

    return (
        <CarouselContent theme={moveCarousel}>
            <div className={`carousel ${isTrasitionNoneCarousel ? 'trasitionMove' : ''}`} >

                {figures.map(figure => {
                    return (
                        <div className="contentFigure" key={figure.position}>
                            <div className={`figure ${figure.position === select ? 'select' : ''}`} >

                                <img className='anime' src={figure.anime} alt="" />
                                <img className={`person`} src={figure.person} alt="figurinha" />
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