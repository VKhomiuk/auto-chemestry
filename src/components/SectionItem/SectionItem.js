import React from 'react'
import s from './SectionItem.module.css'

import Car from '../../assets/images/car-dashboard.png'
import Card1 from '../../assets/images/card1.png'
import Card2 from '../../assets/images/card2.png'
import Card3 from '../../assets/images/card3.png'

const SectionItem = () => {

    const cards = [Card1, Card2, Card3]

    return (
        <div>
            <div className={s.block_cont}>
                <img src={Car} alt='car'/>
                <div className={s.text_wrap}>
                    <h1 className={s.title}>
                        Chemistry - ваше авто це наш догляд.
                    </h1>
                    <p className={s.first_text}>
                        Обираючи продукцію нашої компанії, ви маєте можливість отримати якісну автохімію, яка повністю
                        відповідає європейським нормам і стандартам.
                    </p>
                    <p className={s.second_text}>
                        Отримаєте ефективні та технологічні засоби для догляду за авто, вже зараз.
                    </p>
                </div>
            </div>
            <div className={s.cards_wrap}>
                {cards.map((item, index, array) => {
                    return (
                        <div>
                            <img src={item} alt={item} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SectionItem
