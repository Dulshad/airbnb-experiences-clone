import airbnbLogo from '../../images/airbnb-logo.png'
import styles from './Navbar.module.css'
import classNames from 'classnames'

export default function Info() {
    const navbarClasses = classNames(styles.navbar_container, styles.navbar_border)

    return (
        <nav className={navbarClasses}>
            <img className={styles.navbar_logo} src={ airbnbLogo } alt="Airbnb logo" />
        </nav>
    )}