import styles from './navbar.module.css';
type PropsNavbar={
    tab:string;
    setTab:(tab:string)=>void;
    companies:string[];
}
const Navbar = ({tab, setTab, companies}:PropsNavbar) => {
    return (
        <div className={styles.navbarContainer}>
            {companies.map((company,key)=>{
                return <button key={key} className={styles.navItem+" "+(tab===company&&styles.active)} onClick={()=>{setTab(company)}}>{company}</button>
            })}

        </div>
    );
};

export default Navbar;
