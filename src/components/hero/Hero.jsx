import photoGrid from '../../images/photo-grid.png'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section className={styles['hero-container']}>
            <img className={styles['hero-photo-grid']} src={photoGrid} alt="Grid of pictures of differen activities"/>
            <h1 className={styles['hero-title']}>Online Experiences</h1>
            <p className={styles['hero-text']}>Join unique interactive activities led by one-of-a-kind hosts--all without leaving home.</p>
        </section>
    )
}