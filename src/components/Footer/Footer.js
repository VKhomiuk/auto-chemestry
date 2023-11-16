import React from "react";
import s from './Footer.module.css'

import Logo from '../../assets/images/Logo.png'
import Telegram from '../../assets/icons/telegram.png'
import Mail from '../../assets/icons/mail.png'
import Phone from '../../assets/icons/phone.png'

const Footer = () => {
    return (
        <footer className={s.wrapp}>
            <div className={s.navCont}>
                <span className={s.navItem}>Головна</span>
                <span className={s.navItem}>Каталог</span>
                <span className={`${s.navItem} ${s.lastNav}`}>Контакти</span>
            </div>
            <div className={s.logoSection}>
                <img src={Logo} alt='logo' className={s.logo}/>
                <div className={s.contactUsWrapp}>
                    <img src={Telegram} alt='telegram' className={s.contactUsItem}/>
                    <img src={Mail} alt='mail' className={s.contactUsItem}/>
                    <img src={Phone} alt='phone' className={`${s.contactUsItem} ${s.contactUsItemLast}`}/>
                </div>
                <span className={s.allRightsText}>
                    © Chemistry for auto 2023. Усі права захищено
                </span>
            </div>
            <div className={s.telephoneWrapp}>
                <span className={s.contactUsText}>+38 097 353 04 28</span>
                <span className={s.contactUsText}>+38 073 377 70 71</span>
                <span className={s.contactUsText}>Наші телефони</span>
                <span className={`${s.contactUsText} ${s.contactUsTextLast}`}>chemiforauto@gmail.com</span>
                <span className={s.contactUsText}>Контактний е-mail</span>
            </div>
        </footer>
    )
}

export default Footer
