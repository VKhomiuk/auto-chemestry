import React from "react";
import s from './Selector.module.css'

import ArrowDown from '../../assets/icons/arrowDown.png'

const Selector = (props) => {

    const { title, last } = props

    return (
        <div className={`${s.selectorContainer} ${last && s.last}`}>
            <span className={s.selectorText}>
                {title}
            </span>
            <img src={ArrowDown} alt='arrowDown'/>
        </div>
    )
}

export default Selector
