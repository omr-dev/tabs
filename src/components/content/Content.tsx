import styles from './content.module.css';
import {FaAngleDoubleRight} from 'react-icons/fa';

const Content = () => {
    return (
        <div>
            <h2 className={styles.jobTitle}>Full Stack Web Developer</h2>
            <h3 className={styles.name}>TOMMY</h3>
            <p className={styles.date}>December 2015 - Present</p>
            <div className={styles.detailsBar}>
                <FaAngleDoubleRight className={styles.icon}/> <p className={styles.detailText}>Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.</p>
            </div>
            <div className={styles.detailsBar}>
                <FaAngleDoubleRight className={styles.icon}/> <p className={styles.detailText}>Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.</p>
            </div>
            <div className={styles.detailsBar}>
                <FaAngleDoubleRight className={styles.icon}/> <p className={styles.detailText}>Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.</p>
            </div>
        </div>
    );
};

export default Content;
