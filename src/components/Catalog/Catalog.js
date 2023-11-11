import React from 'react'
import s from './Catalog.module.css'

import Test from '../../assets/images/test.png'
import Bag from '../../assets/icons/bag.png'

const Catalog = (props) => {

    const {
        title,
        catalogs
    } = props

    const empty = []
    empty.length = 4
    empty.fill({})

    return (
        <div className={s.wrapp}>
            <h1 className={s.catalog_title}>
                {title}
            </h1>
            <div className={s.catalog_content_wrapp}>
                {catalogs.map((item, index, array) => {
                    const isLast = index === array.length - 1
                    return (
                        <span className={`${s.title} ${!isLast && s.separator}`}>
                            {item.title}
                        </span>
                    )
                })}
            </div>
            <div className={s.catalog_items}>
                {empty.map(() => <div className={s.item_container}>
                    <img src={Test} alt='test'/>
                    <div className={s.info_wrap}>
                    <span className={s.name}>
                        Shell Helix HX8 5W-40
                    </span>
                        <span className={s.type}>
                        Мастило
                    </span>
                    </div>
                    <div className={s.cost_block}>
                    <span className={s.cost}>
                        1 286 грн
                    </span>
                        <img src={Bag} alt='bag'/>
                    </div>
                </div>)}
            </div>
            <div className={s.button}>
                <span className={s.button_text}>
                    Дивитись ще
                </span>
            </div>
        </div>
    )
}

export default Catalog
