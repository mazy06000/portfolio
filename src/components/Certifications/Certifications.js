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
import pythonDataScience from "../../assets/badges/python-for-data-science.png"
import AIFoundations from "../../assets/badges/ibm-ai-foundations-for-business-specialization.png"


const certifications = [
    {
        link: "https://www.credly.com/badges/b9717b33-bae2-4f61-bb34-c169e406e9c7/public_url",
        path: pythnLvl1,
    },
    {
        link: "https://www.coursera.org/account/accomplishments/certificate/72N7YTEWVGB7",
        path: stanfordML,
    },
    {
        link: "https://www.credly.com/badges/85267101-16f3-4ebd-9aea-7647f47354ad/public_url",
        path: pythonDataScience,
    },
    {
        link: "https://www.credly.com/badges/9378517f-b79e-45eb-9a94-4c379d670408/public_url",
        path: AIFoundations,
    },
]

const Certifications = () => {
    if (!certifications.length) return null

    return (
        <section className='section certifications' id='certifications'>
            <h2 className='section__title'>Certifications</h2>

            <Swiper className='certifications__list'
                spaceBetween={20}
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {certifications.map((certification) => (
                    <SwiperSlide key={uniqid()}>
                        <a href={certification.link}>
                            <img src={certification.path} alt='' className="logo" width="300" height="300" />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )

}


export default Certifications