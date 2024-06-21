'use client';
import styles from './Form.module.css';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
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

    const onSubmit = async (data) => {
        console.log('Submitting data to EmailJS:', data);
        // Envoi du message à l'administrateur
        emailjs.send('service_canadatours', 'template_canadatours', data, '-HYW1Baoxtw22Wnt-')
            .then((response) => {
                console.log('EmailJS SUCCESS!', response.status, response.text);
                setReponse("Message reçu avec succès!");

                // Envoi de l'email de confirmation à l'utilisateur
                return emailjs.send('service_canadatours', 'template_i489usw', {
                    to_name: data.nom,
                    to_email: data.courriel,
                    message: data.message
                }, '-HYW1Baoxtw22Wnt-');
            })
            .then((response) => {
                console.log('Confirmation EmailJS SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.error('EmailJS FAILED...', err);
                setReponse("Échec de l'envoi du message.");
            });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label>
                Nom:
                <input
                    type="text"
                    {...register("nom", {
                        required: 'Champ obligatoire',
                        minLength: { value: 1, message: "min 1 caractères" }
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
                        minLength: { value: 1, message: "min 1 caractères" }
                    })}
                    placeholder='Votre message'
                />
                <div className={styles.erreur}>{errors.message?.message}</div>
            </label>
            <button type="submit">Envoyer</button>
            <div className={styles.reponse}>{reponse}</div>
        </form>
    );
}
