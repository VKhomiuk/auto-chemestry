import React, {useState} from 'react'
import {Link} from "react-router-dom";
import s from './Header.module.css'

import Logo from '../../assets/images/Logo.png'
import Search from '../../assets/icons/search.png'
import Bag from '../../assets/icons/bag.png'
import Arrow from '../../assets/icons/polygon.png'

const Header = () => {

    const [activeItem, setActiveItem] = useState(0)

    const navItems = [
        {
            name: 'Головна',
            key: 'main'
        },
        {
            name: 'Каталог',
            key: 'catalog',
            enableNav: true
        },
        {
            name: 'Контакти',
            key: 'contacts'
        }
    ]

    const options = [
        {
            image: Search
        },
        {
            image: Bag
        },
        {
            image: Arrow,
            text: 'UK'
        }
    ]

    return (
        <header className={s.header}>
            <div className={s.header_container}>
                <img src={Logo} alt='logo' className={s.logo}/>
                <div className={s.nav_wrapper}>
                    {navItems.map((item, index, array) => {

                        const isLast = index === array.length - 1

                        return (
                            <Link className={`${s.nav_link} ${!isLast && s.nav_link__separator}`}
                                  to={item?.enableNav ? item.key : '/'}>
                                {item.name}
                            </Link>
                        )
                    })}
                </div>
                <div className={s.options_wrapper}>
                    {options.map((item, index, array) => {
                        return (
                            <div className={`${s.option_container} ${s.option_separator}`}>
                                {item?.text ? (
                                    <p className={s.option_text}>
                                        {item?.text}
                                    </p>
                                ) : null}
                                <img src={item.image} alt='option'/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </header>
    )
}

export default Header
