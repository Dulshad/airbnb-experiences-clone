import starIcon from '../../images/star.png'
import styles from './Card.module.css'

const Card = ({coverImg, rating, reviewCount, location, title, price, openSpots}) => {

    const badgeText = (!openSpots ? "SOLD OUT" : "") || (location === "Online" ? "ONLINE" : "");

    return (
            <div className={styles.card_container}>
                {badgeText && <div className={styles.card_badge}>{badgeText}</div>}
                <img className={styles.card_img} src={`/images/${coverImg}`} alt="picture of katie zaferes in swim suit"/>
                <div className={styles.card_rating}>
                    <img className={styles.card_rating_icon} src={starIcon} alt="icon of star"/>
                    <p>{rating} <span className={styles.card_light_text}>({reviewCount}) - {location}</span></p>
                </div>
                <p>{title}</p>
                <p><span className={styles.card_bold_text}>From ${price} </span> / person</p>
            </div>
    )
}

export default Card;