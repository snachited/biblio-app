import Link from 'next/link';
import styles from './MenuNav.module.css';
// import { useRouter } from 'next/navigation';
export default function MenuNav() {
    // const routeur = useRouter();
    return <nav className={styles.nav}>
        <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/Ontario">Ontario</Link></li>
            <li><Link href="/Quebec">Quebec</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
            <li><Link href="/Connexion">Connexion</Link></li>
        </ul>
      
    </nav>
}  