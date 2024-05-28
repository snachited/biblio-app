'use client'
import Ontario from "@/components/Ontario";
import Quebec from "@/components/Quebec";
import { useState } from "react";
import Accueil from "@/components/Accueil";
import Header from '@/components/Header'
import { Inter } from "next/font/google";
import Footer from '@/components/Footer';
import "./globals.css";
import styles from './layout.module.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [page, setPage] = useState('accueil');
  return (
    <html lang="en">
      <body className={inter.className + ' ' + styles.body}>
        <Header setPage={setPage} />
        <main className={styles.main}>
          {page === 'accueil' ?
            <Accueil />
            : page === 'Ontario' ?
              <Ontario />
              : page === 'Quebec' ?
                <Quebec />
                  : <div>404 - Not Found</div>
          }
        </main>
        <Footer />
      </body>
    </html>
  );
}
