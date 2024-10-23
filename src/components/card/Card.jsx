import starIcon from '../../images/star.png'
import styles from './Card.module.css'

const Card = ({img, rating, reviewCount, country, title, price}) => {
    return (
        <section className={styles['cards-container']}>
            <div className={styles['card-container']}>
                <img className={styles['card-img']} src={img} alt="picture of katie zaferes in swim suit"/>
                <div className={styles['card-rating']}>
                    <img className={styles['card-rating-icon']} src={starIcon} alt="icon of star"/>
                    <p>{rating} <span className={styles['card-light-text']}>({reviewCount}) - {country}</span></p>
                </div>
                <p>{title}</p>
                <p><span className={styles['card-bold-text']}>From ${price} </span> / person</p>
            </div>
        </section>
    )
}

export default Card;