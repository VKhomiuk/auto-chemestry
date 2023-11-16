import React from "react";
import s from './Product.module.css'
import Test from "../../assets/images/test.png";
import Bag from "../../assets/icons/bag.png";
import {Link} from "react-router-dom";

const Product = (props) => {

    const {
        title = 'Shell Helix HX8 5W-40',
        type = 'Мастило',
        cost = '1 286 грн',
        image = Test,
    } = props

    return (
        <Link to='/product' className={s.item_container}>
            <img src={image} alt='test'/>
            <div className={s.info_wrap}>
                    <span className={s.name}>
                        {title}
                    </span>
                <span className={s.type}>
                        {type}
                    </span>
            </div>
            <div className={s.cost_block}>
                    <span className={s.cost}>
                        {cost}
                    </span>
                <img src={Bag} alt='bag'/>
            </div>
        </Link>
    )
}

export default Product
