import styles from './navbar.module.css';
const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <button className={styles.navItem+" "+styles.active}>TOMMY</button>
            <button className={styles.navItem}>BIGDROP</button>
            <button className={styles.navItem}>CUKER</button>
        </div>
    );
};

export default Navbar;
