import styles from './content.module.css';
import {FaAngleDoubleRight} from 'react-icons/fa';
type PropsContent={
    values:{id:number;order:number; title:string; dates:string; duties:string[]; company:string}
}
const Content = ({ values}:PropsContent) => {
    const { title, dates, duties, company}=values;
    return (
        <div>
            <h2 className={styles.jobTitle}>{title}</h2>
            <h3 className={styles.name}>{company}</h3>
            <p className={styles.date}>{dates}</p>
            <div className={styles.detailsBoxes}>
                {duties.map((duty,key)=>{
                    return(
                        <div key={key} className={styles.detailsBar}>
                            <div><FaAngleDoubleRight className={styles.icon}/></div>
                            <div>
                                <p className={styles.detailText}> {duty}</p>

                            </div>
                        </div>
                    );
                })}

            </div>

        </div>
    );
};

export default Content;
