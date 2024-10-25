import starIcon from '../../images/star.png'
import styles from './Card.module.css'

const Card = ({coverImg, rating, reviewCount, location, title, price, openSpots}) => {
    let badgeText;
    if (!openSpots) {
        badgeText = "SOLD OUT"
    } else if (location === "Online") {
        badgeText = "ONLINE"
    }

    return (
            <div className={styles['card-container']}>
                {badgeText && <div className={styles["card-badge"]}>{badgeText}</div>}
                <img className={styles['card-img']} src={`/images/${coverImg}`} alt="picture of katie zaferes in swim suit"/>
                <div className={styles['card-rating']}>
                    <img className={styles['card-rating-icon']} src={starIcon} alt="icon of star"/>
                    <p>{rating} <span className={styles['card-light-text']}>({reviewCount}) - {location}</span></p>
                </div>
                <p>{title}</p>
                <p><span className={styles['card-bold-text']}>From ${price} </span> / person</p>
            </div>
    )
}

export default Card;