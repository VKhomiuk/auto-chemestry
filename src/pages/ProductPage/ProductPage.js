import React, {useState} from "react";
import s from './ProductPage.module.css'

import Test from '../../assets/images/motul.png'
import Product from "../../components/Product/Product";

const ProductPage = () => {

    const [amount, setAmount] = useState(1)

    const handleIncreaseAmount = () => {
        setAmount((prev) => prev + 1)
    }

    const handleDecreaseAmount = () => {
        if (amount > 1) {
            setAmount((prev) => prev - 1)
        }
    }

    const emptyArr = []
    emptyArr.length = 4
    emptyArr.fill({})

    return (
        <div className={s.wrapp}>
            <div className={s.productPageWrapp}>
                <div className={s.productInfoBlock}>
                    <div className={s.productImagesList}>
                        {emptyArr.map((item) => {
                            return (
                                <div className={s.productImageThumbnail}>
                                    <img src={Test} alt='test' className={s.productThumbnail}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className={s.productSelectedImageWrapp}>
                        <div className={s.productImage}>
                            <img src={Test} alt='test' className={s.productImage}/>
                        </div>
                        <div className={s.productImageSlider}>
                            <div className={s.productImageSliderActive}/>
                        </div>
                    </div>
                    <div className={s.productInfoContainer}>
                    <span className={s.title}>
                        Motul 8100 X-cess Gen2 5W-40
                    </span>
                        <span className={s.price}>
                        1 307 грн
                    </span>
                        <span className={s.description}>
                        Високотехнологічна 100% синтетична моторна олія, спеціально розроблена для сучасних бензинових та дизельних двигунів легкових автомобілів, що відповідають вимогам норм Euro 4, Euro 5 та Euro 6, та потребують використання в них олії з високою в'язкістю HTHS (більше 3.5 мПа·с), зниженою сульфатною зольністю (0,8%), вмістом фосфору (0.07%-0.09%) та сірки (0.3%) – «Mid SAPS».
                        Сумісно з каталітичними нейтралізаторами та сажовими фільтрами (DPF). Рекомендовано для використання у сучасних двигунах легкових автомобілів BMW, MERCEDES, PORSCHE та VAG (VW, AUDI, SEAT, SKODA).
                        Може застосовуватися в бензинових та дизельних двигунах, що вимагають моторне масло стандарту ACEA С3.
                        Перед використанням зверніться до інструкції з експлуатації транспортного засобу.
                    </span>
                        <div className={s.buyCont}>
                            <div className={s.amountSelector}>
                                <span onClick={handleDecreaseAmount} className={s.amount}>-</span>
                                <div className={`${s.amount} ${s.amountCount}`}>{amount}</div>
                                <span onClick={handleIncreaseAmount} className={s.amount}>+</span>
                            </div>
                            <div className={s.button}>
                            <span className={s.buttonText}>
                                В кошик
                            </span>
                            </div>
                        </div>
                        <div className={s.categoryWrapp}>
                        <span className={s.category}>
                            Категорія:
                        </span>
                            <span className={s.categoryText}>
                            Мастила
                        </span>
                        </div>
                    </div>

                </div>
                <div className={s.separator}/>
                <div className={s.tabWrapp}>
                    <div className={s.tabCont}>
                        <span className={s.tabText}>
                            Опис
                        </span>
                        <div className={s.tabUnderline}>
.
                        </div>
                    </div>
                    <div/>
                </div>
                <div className={s.textDescription}>
                    <span className={s.text}>Мастило для мотора Motul 5W-408100 X-cess - продукція з ретельно підібраним складом, схвалена провідними автоконцернами. Рекомендується використовувати для потужних двигунів нового покоління, щоб продовжити ресурс і захистити від прискореного зносу. Відрізняється сумісністю з каталітичними нейтралізаторами, тому забезпечує екологічність транспортного засобу.</span>
                </div>
                <div className={s.relatedWrapp}>
                    <span className={s.relatedWrappTitle}>Схожі товари</span>
                    <div className={s.relatedProductsCont}>
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
