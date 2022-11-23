import Title from './components/title/Title';
import Content from './components/content/Content';
import ButtonRow from './components/buttonRow/ButtonRow';
import Navbar from './components/navbar/Navbar';
import styles from './App.module.css';
function App() {

    return (
        <div className={styles.App}>
            <Title/>
            <Navbar/>
            <Content/>
            <ButtonRow/>
        </div>
    );
}

export default App;
