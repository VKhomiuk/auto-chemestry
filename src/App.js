import './App.css';
import './index.css';

import Header from "./components/Header/Header";

import MainSection from "./assets/images/mainSection.png"
import Chemistry from "./assets/images/chemistry.png"
import CarEngine from "./assets/images/carEngine.png"
import SectionItem from "./components/SectionItem/SectionItem";
import Catalog from "./components/Catalog/Catalog";
import BoxCatalog from "./components/BoxCatalog/BoxCatalog";
import Faq from "./components/Faq/Faq";

const App = () => {

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
        <div className="container">
            <div className='header-container'>
                <Header/>
            </div>
            <div className="content__wrapper">
                <img src={MainSection} alt='mainSection'/>
                <div className='main_section__wrapper'>
                    <img src={Chemistry} alt='logoText'/>
                    <h2 className='main_section__title'>
                        Ваше авто — наш догляд
                    </h2>
                    <div className='main_section__button'>
                    <span className='main_section__button-text'>
                        Перейти в каталог
                    </span>
                    </div>
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
                <BoxCatalog />
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
                <Faq />
            </div>
        </div>
    );
}

export default App;
