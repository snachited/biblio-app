import styles from './Ontario.module.css';

export default function Ontario() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Découvrez les Merveilles de l'Ontario</h1>
            <section className={styles.section}>
                <h2 className={styles.subTitle}>Les Chutes du Niagara</h2>
                <p>
                    Les Chutes du Niagara sont l'une des attractions les plus emblématiques de l'Ontario. Chaque année, des millions de visiteurs viennent admirer la puissance et la beauté de ces chutes d'eau spectaculaires. Vous pouvez profiter de diverses activités, telles que des croisières en bateau pour voir les chutes de près, des randonnées sur les sentiers environnants, et des visites des nombreuses attractions touristiques de la région.
                </p>
                <img src="/niagara.webp" alt="Chutes du Niagara" className={styles.image} />
            </section>
            <section className={styles.section}>
                <h2 className={styles.subTitle}>Parc Algonquin</h2>
                <p>
                    Le Parc Algonquin est une destination incontournable pour les amoureux de la nature. Avec ses vastes forêts, ses lacs scintillants et sa faune abondante, le parc offre de nombreuses activités, notamment la randonnée, le canoë, le camping et l'observation de la faune. C'est un endroit idéal pour se reconnecter avec la nature et profiter de la tranquillité du plein air.
                </p>
                <img src="/algonquin.webp" alt="Parc Algonquin" className={styles.image} />
            </section>
            <section className={styles.section}>
                <h2 className={styles.subTitle}>CN Tower à Toronto</h2>
                <p>
                    La CN Tower est l'un des monuments les plus reconnaissables du Canada. Située au cœur de Toronto, elle offre des vues panoramiques spectaculaires sur la ville et le lac Ontario. Les visiteurs peuvent monter jusqu'à la terrasse d'observation pour admirer la vue, dîner au restaurant tournant ou même marcher sur le plancher de verre pour une expérience inoubliable.
                </p>
                <img src="/tower.webp" alt="CN Tower" className={styles.image} />
            </section>
            <section className={styles.section}>
                <h2 className={styles.subTitle}>Musée Royal de l'Ontario</h2>
                <p>
                    Le Musée Royal de l'Ontario est l'un des plus grands musées en Amérique du Nord, abritant des collections impressionnantes d'art, de culture et de nature. Les expositions couvrent une variété de sujets, allant des dinosaures aux momies égyptiennes, en passant par l'art canadien et les artefacts culturels du monde entier. C'est un lieu idéal pour apprendre et explorer.
                </p>
                <img src="/royal.webp" alt="Musée Royal de l'Ontario" className={styles.image} />
            </section>
        </div>
    );
}
