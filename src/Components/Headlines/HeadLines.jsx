import { HeadLinesCards } from "./HeadLinesCards";
import { headcards } from "../../data/headlinescard";

import Slider from "react-slick";


export const HeadLines = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='max-w-[1640px] m-auto py-32'>
            <div className="max-w-7xl px-5 mx-auto">

                <Slider {...settings} className='mx-4 px-5'>
                    {headcards.map((headcard, i) =>
                        <div key={i} className="px-2">
                            <HeadLinesCards headcard={headcard} />
                        </div>)}
                </Slider>


            </div>
        </div>
    )
}
