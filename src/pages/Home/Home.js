import React from 'react'
import {Link} from "react-router-dom";
import MainSection from "../../assets/images/mainSection.png";
import Chemistry from "../../assets/images/chemistry.png";
import SectionItem from "../../components/SectionItem/SectionItem";
import Catalog from "../../components/Catalog/Catalog";
import BoxCatalog from "../../components/BoxCatalog/BoxCatalog";
import CarEngine from "../../assets/images/carEngine.png";
import Faq from "../../components/Faq/Faq";
import LastSection from "../../components/LastSection/LastSection";

const Home = () => {


    const firstCatalog = [
        {
            title: 'Мастила'
        },
        {
            title: 'Поліролі'
        },
        {
            title: 'Очисники'
        }
    ]

    const secondCatalog = [
        {
            title: 'Частіше купують'
        },
        {
            title: 'Необхідно кожному'
        },
        {
            title: 'Зроби авто чистим'
        }
    ]


    return (
        <div>
            <div className="content__wrapper">
                <img src={MainSection} alt='mainSection'/>
                <div className='main_section__wrapper'>
                    <img src={Chemistry} alt='logoText'/>
                    <h2 className='main_section__title'>
                        Ваше авто — наш догляд
                    </h2>
                    <Link to='/catalog' className='main_section__button'>
                        <span className='main_section__button-text'>
                            Перейти в каталог
                        </span>
                    </Link>
                </div>
            </div>
            <div className='block_wrapper'>
                <SectionItem/>
            </div>
            <div className='default_wrapper'>
                <Catalog
                    catalogs={firstCatalog}
                    title='Каталог товарів'
                />
            </div>
            <div className='default_wrapper'>
                <BoxCatalog/>
            </div>
            <div className='default_wrapper'>
                <img src={CarEngine} alt='carEngine'/>
            </div>
            <div className='default_wrapper'>
                <Catalog
                    catalogs={secondCatalog}
                    title='Ми радимо'
                />
            </div>
            <div className='default_wrapper'>
                <Faq/>
            </div>
            <div className='default_wrapper'>
                <LastSection/>
            </div>
        </div>
    )
}

export default Home
