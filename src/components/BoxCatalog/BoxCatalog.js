import React from 'react'
import s from './BoxCatalog.module.css'

import Box from '../../assets/images/box.png'

const BoxCatalog = () => {

    const empty = []
    empty.length = 4
    empty.fill({})

    return (
        <div className={s.wrapp}>
            <span className={s.title}>
                Обери свій бокс
            </span>
            <span className={s.description}>
                Ми створили для тебе готові вигідні пропозиції, обирай свою.
            </span>
            <div className={s.boxes_cont}>
                {empty.map((item, index, array) => {
                    return (
                        <div className={s.box_cont}>
                            <img src={Box} alt='box'/>
                            <span className={s.box_text}>
                                Box "Преміум"
                            </span>
                        </div>
                    )
                })}
            </div>
            <div className={s.button}>
                <span className={s.button_text}>
                    Обери свій бокс
                </span>
            </div>
        </div>
    )
}

export default BoxCatalog
