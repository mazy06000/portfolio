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
import DLEssentials from "../../assets/badges/deep-learning-essentials.png"
import DEEssentials from "../../assets/badges/data-engineering-essentials.png"
import PythonForDSAI from "../../assets/badges/python-for-data-science-and-ai.png"
import IntroRDBMS from "../../assets/badges/relational-databases-rdbms-essentials.png"


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
    {
        link: "https://www.credly.com/badges/c858a38b-fb67-429b-b2c8-5723cd43c3ce/public_url",
        path: DLEssentials,
    },
    {
        link: "https://www.credly.com/badges/4a55cc57-7fda-439f-a705-d83910481b02/public_url",
        path: DEEssentials,
    },
    {
        link: "https://www.credly.com/badges/35a0c039-70d5-4325-9e4b-0382c17fe957/public_url",
        path: PythonForDSAI,
    },
    {
        link: "https://www.credly.com/badges/182b4732-0e18-437a-a3b1-6354110b65a7/public_url",
        path: IntroRDBMS,
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