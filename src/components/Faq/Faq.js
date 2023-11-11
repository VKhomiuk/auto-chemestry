import React from "react";
import s from './Faq.module.css'

const Faq = () => {


    const asks = [
        {
            title: 'Як зробити замовлення?'
        },
        {
            title: 'Способи оплати'
        },
        {
            title: 'Доставка'
        },
        {
            title: 'Терміни доставки'
        },
        {
            title: 'Повернення товару'
        }
    ]

    return (
        <div className={s.wrapp}>
            <span className={s.title}>
                FAQ
            </span>
            <div className={s.ask_wrapp}>
                {asks.map((item, index, array) => {
                    const isLast = index === array.length - 1
                    return (
                        <div className={`${s.ask_cont} ${!isLast && s.separator}`}>
                            <span className={s.ask_text}>
                                {item.title}
                            </span>
                            <div className={s.ask_text} style={{ fontSize: 26 }}>
                                +
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Faq
