'use client'
import styles from './Form.module.css'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { useState } from 'react';

export default function FormHook() {
    const [reponse, setReponse] = useState(''); 
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            nom: '',
            courriel: '',
            message: ''
        }
    });
    const nom = watch('nom');

    const onSubmit = (data) => {
        emailjs.send('service_canadatours', 'template_canadatours', data, '-HYW1Baoxtw22Wnt-') 
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setReponse("Message reçu avec succès!");
            }, (err) => {
                console.log('FAILED...', err);
                setReponse("Échec de l'envoi du message.");
            });
    };

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Nom:
                    <input
                        type="text"
                        {...register("nom", {
                            required: 'Champ obligatoire',
                            minLength: { value: 4, message: "min 4 caractères" }
                        })}
                        placeholder='votre nom'
                    />
                    <div className={styles.erreur}>{errors.nom?.message}</div>
                </label>
                <div>Nom : {nom}</div>
                <label>
                    Courriel:
                    <input
                        type="email"
                        {...register("courriel", {
                            required: 'Champ obligatoire',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Courriel non valide'
                            }
                        })}
                        placeholder='votre courriel'
                    />
                    <div className={styles.erreur}>{errors.courriel?.message}</div>
                </label>
                <label>
                    Message:
                    <textarea
                        {...register("message", {
                            required: 'Champ obligatoire',
                            minLength: { value: 10, message: "min 10 caractères" }
                        })}
                        placeholder='Votre message'
                    />
                    <div className={styles.erreur}>{errors.message?.message}</div>
                </label>
                <button type="submit">Envoyer</button>
                <div className={styles.reponse}>{reponse}</div>
            </form>
        </>
    );
}
