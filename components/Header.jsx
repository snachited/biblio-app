import styles from './Header.module.css';
import Image from 'next/image';
import logo from '@/public/logo1.webp';
import MenuNav from './MenuNav';

export default function Header({setPage}) {
    return <header className={styles.header}>
        <div className={styles.title}>
            <Image
                src={logo}
                alt="Logo React"
                width={80}
            />
            <h1>Biblio App</h1>
        </div>
        
        <MenuNav setPage={setPage} />
    </header>
}