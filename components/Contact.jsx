import React from 'react';
import FormHook from "./FormHook";
import styles from './connexion.module.css'; 

export default function Contact() {
    return (
        <div className={styles.container}>
            <h2>Contactez Notre support Maintenant !</h2>
            <FormHook />
        </div>
    );
}
