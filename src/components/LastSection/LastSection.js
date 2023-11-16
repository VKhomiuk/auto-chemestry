import React from 'react'
import s from './LastSection.module.css'

import CarWashDetailingStation from '../../assets/images/car-wash-detailing-station.png'
import Input1 from '../../assets/images/Input1.png'
import Input2 from '../../assets/images/Input2.png'

const LastSection = () => {
    return (
        <div className={s.wrapp}>
            <img src={CarWashDetailingStation} alt='CarWashDetailingStation' />
            <div className={s.cont}>
                <div className={s.text_wrapp}>
                    <span className={s.title}>
                        Залишились питання?
                    </span>
                    <span className={s.desc}>
                        Відправте заявку і ми Вам зателефонуємо.
                    </span>
                </div>

                <img src={Input1} alt='Input1' className={s.input} />
                <img src={Input2} alt='Input2' className={s.input} />

                <div className={s.button}>
                    <span className={s.button_text}>
                        Надіслати
                    </span>
                </div>
            </div>
        </div>
    )
}

export default LastSection
