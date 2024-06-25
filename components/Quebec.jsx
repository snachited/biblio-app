import styles from './Quebec.module.css';
export default function Quebec() {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Explorez les Beautés du Québec</h1>
            <section className={styles.section}>
                <h2 className={styles.subTitle}>Vieux-Québec et la Citadelle</h2>
                <p>
                    Le Vieux-Québec est un quartier historique rempli de charme avec ses rues pavées, ses bâtiments datant du 17<sup>ème</sup> siècle et ses remparts. La Citadelle de Québec, une forteresse active et résidence officielle du Gouverneur général, offre des vues magnifiques sur le fleuve Saint-Laurent et une riche histoire militaire à découvrir.
                </p>
                <img src="/Citadellel.webp" alt="Vieux-Québec" className={styles.image} />
            </section>
            <section className={styles.section}>
                <h2 className={styles.subTitle}>Mont-Tremblant</h2>
                <p>
                    Mont-Tremblant est une destination de premier choix pour les amateurs de plein air. Que ce soit pour le ski en hiver ou la randonnée et le vélo en été, ce parc national offre une variété d&apos;activités. Le village piétonnier de Mont-Tremblant est également connu pour ses boutiques, ses restaurants et ses événements tout au long de l&apos;année.
                </p>
                <img src="/tremblant.webp" alt="Mont-Tremblant" className={styles.image} />
            </section>
            <section className={styles.section}>
                <h2 className={styles.subTitle}>Parc de la Chute-Montmorency</h2>
                <p>
                    Situé à quelques minutes du centre-ville de Québec, le Parc de la Chute-Montmorency est une chute d&apos;eau impressionnante, plus haute que les Chutes du Niagara. Les visiteurs peuvent emprunter un téléphérique, marcher le long des sentiers et profiter des vues spectaculaires depuis la passerelle suspendue au-dessus des chutes.
                </p>
                <img src="/montmorency.webp" alt="Chute-Montmorency" className={styles.image} />
            </section>
            <section className={styles.section}>
                <h2 className={styles.subTitle}>Basilique Notre-Dame de Montréal</h2>
                <p>
                    La Basilique Notre-Dame de Montréal est un chef-d&apos;œuvre d&apos;architecture gothique avec un intérieur somptueux. Les visiteurs peuvent admirer ses vitraux, ses sculptures et assister à un spectacle de lumière et de son qui raconte l&apos;histoire de Montréal.
                </p>
                <img src="/notre.webp" alt="Basilique Notre-Dame de Montréal" className={styles.image} />
            </section>
        </div>
    );
}
