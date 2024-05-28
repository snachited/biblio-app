import styles from './MenuNav.module.css';
export default function MenuNav({setPage}) {
    return <nav className={styles.nav}>
        <ul>
            <li><a href="#" onClick={() => setPage('accueil')}>Accueil</a></li>
            <li><a href="#" onClick={() => setPage('Ontario')}>Ontario</a></li>
            <li><a href="#" onClick={() => setPage('Quebec')}>Quebec</a></li>
        
        </ul>
    </nav>
}