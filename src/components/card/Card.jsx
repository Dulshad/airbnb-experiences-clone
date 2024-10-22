/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/
import katieZaferes from '../../images/katie-zaferes.png'
import starIcon from '../../images/star.png'
import styles from './Card.module.css'

const Card = () => {
    return (
        <section className={styles['cards-container']}>
            <div className={styles['card-container']}>
                <img className={styles['card-img']} src={katieZaferes} alt="picture of katie zaferes in swim suit"/>
                <div className={styles['card-rating']}>
                    <img className={styles['card-rating-icon']} src={starIcon} alt="icon of star"/>
                    <p>5.0 <span className={styles['card-light-text']}>(6) - USA</span></p>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><span className={styles['card-bold-text']}>From $136 </span> / person</p>
            </div>
        </section>
    )
}

export default Card;