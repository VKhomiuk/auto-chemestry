import React from "react";
import s from './Filter.module.css'
import Selector from "../Selector/Selector";
import Search from '../../assets/icons/search.png'
import SlideButton from '../../assets/icons/slideButton.svg'
import PriceFilter from '../../assets/icons/priceFilter.svg'

const Filter = () => {
    return (
        <div className={s.filtherWrapp}>
            <span className={s.url}>Головна / Каталог товарів / Maстило</span>
            <span className={s.title}>Підбір товарів</span>
            <div className={s.inputWrapp}>
                <div className={s.inputCont}>
                    <span className={s.inputText}>
                        Пошук
                    </span>
                    <img src={Search} alt='search' className={s.inputIcon}/>
                </div>
                <div className={s.separator}/>
            </div>
            <Selector title='Тип' />
            <Selector title='Бренд' />
            <div className={s.costSlide}>
                <img src={PriceFilter} alt='priceFilter'/>
            </div>
            <div className={s.specialProp}>
                <span className={s.specialPropText}>
                    Спеціальна пропозиція
                </span>
                <img src={SlideButton} alt='slideButton'/>
            </div>
            <div className={s.button}>
                <span className={s.buttonText}>
                    Застосувати
                </span>
            </div>
        </div>
    )
}

export default Filter
