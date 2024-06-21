'use client'
import Link from 'next/link';
import styles from './MenuNav.module.css';
import { useTheme } from './ThemeProvider'; //Importer le hook personnalisé pour manipuler le thème
import { useLocale } from './LocaleProvider';
import { FormattedMessage } from 'react-intl'
export default function MenuNav() {
    const [theme, setTheme] = useTheme();
    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }
    const [locale, setLocale] = useLocale();
    const handleLocale = () => {
        if (locale === 'fr') {
            setLocale('en');
        }
        else {
            setLocale('fr');
        }
    }
    return <nav className={styles.nav}>
        <ul>
        <li><Link href="/"><FormattedMessage id='app.header.menu.lien1'/> </Link></li>
            <li><Link href="/Ontario"><FormattedMessage id='app.header.menu.lien2'/></Link></li>
            <li><Link href="/Quebec"><FormattedMessage id='app.header.menu.lien3'/></Link></li>
            <li><Link href="/Contact"><FormattedMessage id='app.header.menu.lien4'/></Link></li>
            <li><Link href="/Connexion"><FormattedMessage id='app.header.menu.lien5'/></Link></li>
        </ul>
        <label>
            Mode Sombre:
            <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={handleTheme}
            />
        </label>
        <div>
            <label>
                EN :
                <input
                    type="checkbox"
                    checked={locale === 'en'}
                    onChange={handleLocale} />
            </label>
        </div>
    </nav>
}