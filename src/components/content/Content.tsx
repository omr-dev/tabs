import styles from './content.module.css';
import {FaAngleDoubleRight} from 'react-icons/fa';

const Content = () => {
    return (
        <div>
            <h2 className={styles.jobTitle}>Full Stack Web Developer</h2>
            <h3 className={styles.name}>TOMMY</h3>
            <p className={styles.date}>December 2015 - Present</p>
            <div className={styles.detailsBoxes}>
                <div className={styles.detailsBar}>
                    <div><FaAngleDoubleRight className={styles.icon}/></div>
                    <div>
                        <p className={styles.detailText}>Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.</p>

                    </div>
                </div>
                <div className={styles.detailsBar}>
                    <div><FaAngleDoubleRight className={styles.icon}/></div>
                    <div>
                        <p className={styles.detailText}>Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.</p>

                    </div>
                </div>
                <div className={styles.detailsBar}>
                    <div><FaAngleDoubleRight className={styles.icon}/></div>
                    <div>
                        <p className={styles.detailText}>Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread
                            tilde
                            vegan flexitarian.</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Content;
