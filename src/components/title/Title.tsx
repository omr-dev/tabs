import styles from './title.module.css';
const Title = () => {
    return (
        <div className={styles.titleBox}>
            <h1 className={styles.title}>Experience</h1>
            <div className={styles.underline}></div>
        </div>
    );
};

export default Title;
