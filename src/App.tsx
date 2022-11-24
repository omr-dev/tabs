import Title from './components/title/Title';
import Content from './components/content/Content';
import ButtonRow from './components/buttonRow/ButtonRow';
import Navbar from './components/navbar/Navbar';
import styles from './App.module.css';
import {useEffect, useState} from 'react';
import Loading from './components/loading/Loading';

type Data=Experience[];
type Experience={
    id:number;
    order:number;
    title:string;
    dates:string;
    duties:string[];
    company:string;
}

const createSortedCompaniesList = (data:Data):string[]|null => {
    let sortedList = [];
    let nextIndex = data.length;
    while (nextIndex > 0) {
        const nextExperience=data.find((d) => d.order === nextIndex)?.company;
        if(nextExperience) sortedList.push(nextExperience);
        nextIndex--;
    }

   if(sortedList.length>0) return sortedList;
   return null;
};

function App() {
    const [data, setData] = useState<Data|null>(null);
    const [companies, setCompanies] = useState<string[]|null>(null);
    const [tab, setTab] = useState(companies && companies[0]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentValues,setCurrentValues]=useState<Experience|null>(null);


    useEffect(() => {
        fetch("https://course-api.com/react-tabs-project")
            .then(res => res.json())
            .then(data => {
                setData(data);
                const sortedCompanies=createSortedCompaniesList(data);
               if(sortedCompanies) setCompanies(sortedCompanies);

            });

    }, []);
    useEffect(() => {
        if (companies) {
            setTab(companies[0]);

            setIsLoading(false);
        }
    }, [data]);
    useEffect(()=>{
        let newValues=data?.find((m) => m.company === tab);
        if(newValues) setCurrentValues(newValues);
    },[tab])
    if (isLoading) {
        return <Loading/>;
    }


    return (
        <div className={styles.App}>
            <Title/>
            <div className={styles.body}>
                <div className={styles.navbar}>
                    {(tab &&companies)&& <Navbar tab={tab} setTab={setTab} companies={companies}/>}

                </div>
                <div className={styles.content}>

                    {currentValues && <Content values={currentValues}/>}
                </div>
            </div>

            <ButtonRow/>
        </div>
    );
}

export default App;
