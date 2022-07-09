import uniqid from 'uniqid'
import './Certifications.css'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css'

import pythnLvl1 from "../../assets/badges/machine-learning-with-python-level-1.png"
import stanfordML from "../../assets/badges/stanford-ml.png"



const certifications = [
    {
        link: "https://www.credly.com/badges/b9717b33-bae2-4f61-bb34-c169e406e9c7/public_url",
        path: pythnLvl1,
    },
    {
        link: "https://www.coursera.org/account/accomplishments/certificate/72N7YTEWVGB7",
        path: stanfordML,
    },
]

const Certifications = () => {
    if (!certifications.length) return null

    return (
        <section className='section certifications' id='certifications'>
            <h2 className='section__title'>Certifications</h2>

            <Swiper className='certifications__list'
                // install Swiper modules
                spaceBetween={20}
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {certifications.map((certification) => (
                    <SwiperSlide>
                        <a href={certification.link} key={uniqid()}>
                            <img src={certification.path} alt='' className="logo" width="300" height="300" />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )

}


export default Certifications