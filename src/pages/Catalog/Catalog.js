import React from "react";
import s from './Catalog.module.css'

import CatalogImg from '../../assets/images/catalogImg.png'
import Filter from "../../components/Filter/Filter";
import Product from "../../components/Product/Product";

const Catalog = () => {

    const emptyArr = []
    emptyArr.length = 9
    emptyArr.fill({})

    return (
            <div className={s.catalogWrapp}>
                <div className={s.headerWrapp}>
                    <img src={CatalogImg} alt='CatalogImg'/>
                    <span className={s.headerText}>
                    Мастило
                </span>
                </div>
                <div className={s.content}>
                    <Filter/>
                    <div className={s.sliderWrapp}>
                        {emptyArr.map((item) => {
                            return (
                                <Product />
                            )
                        })}
                    </div>
                </div>

            </div>
    )
}

export default Catalog
