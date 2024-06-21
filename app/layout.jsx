import Header from '@/components/Header'
import { Inter } from "next/font/google";
import Footer from '@/components/Footer';
import "./globals.css";
import styles from './layout.module.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LocaleProvider } from '@/components/LocaleProvider';
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: 'CanadaTours | Accueil',
  description: 'Site web touristique.',
  openGraph: {
    title: 'CanadaTours | Accueil',
    description: 'Site web touristique.',
    images: ['./canada.webp']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' ' + styles.body}>
        <ThemeProvider>
          <LocaleProvider>
            <Header />
            <main className={styles.main}>
              {children}
            </main>
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
