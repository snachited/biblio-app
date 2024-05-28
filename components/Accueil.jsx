import styles from './Accueil.module.css';
import Citation from './Citation';

export default function Accueil() {
    return (
        <>
            <div className={styles.welcomeContainer}>
                <h1 className={styles.brand}>Bienvenue sur <span className={styles.brandHighlight}>CanadaTours</span></h1>
                <p className={styles.tagline}>
                    Votre guide ultime pour découvrir les merveilles touristiques et culturelles des provinces canadiennes.
                </p>
            </div>
            <Citation auteur='CANADATOURS.CA'>
                Que vous soyez un voyageur local ou international,
                notre mission est de vous fournir une plateforme informative et engageante qui met en valeur la richesse et la diversité des 
                attractions canadiennes. Chez CanadaTours, nous croyons que chaque coin du Canada a quelque chose d'unique à offrir. 
            </Citation>
            <div className={styles.imageContainer}>
                <img src="/canada.webp" alt="Canada Landscape" className={styles.image} />
            </div>
            <div className={styles.content}>
                <section className={styles.provinceSection}>
                    <h2>Ontario</h2>
                    <p>
                        Ontario est la province la plus peuplée du Canada, abritant des villes dynamiques comme Toronto, la capitale économique du pays, et Ottawa, la capitale nationale. L'Ontario est réputé pour ses attractions culturelles, telles que le Musée royal de l'Ontario et la Galerie d'art de l'Ontario, ainsi que pour ses merveilles naturelles comme les chutes du Niagara, l'un des sites les plus emblématiques au monde. Avec ses parcs provinciaux étendus, ses lacs pittoresques et ses régions viticoles renommées, l'Ontario offre une diversité d'expériences à ses visiteurs.
                    </p>
                    <img src="/on.webp" alt="Ontario" className={styles.provinceImage} />
                </section>
                <section className={styles.provinceSection}>
                    <h2>Québec</h2>
                    <p>
                        Québec est la plus grande province du Canada en termes de superficie et est la seule à avoir une majorité de francophones. Connue pour son riche patrimoine culturel et historique, le Québec attire des millions de visiteurs chaque année avec ses festivals animés, sa cuisine délicieuse et son architecture européenne. La ville de Québec, avec ses rues pavées et ses fortifications historiques, est un site du patrimoine mondial de l'UNESCO, tandis que Montréal, la plus grande ville de la province, est célèbre pour sa scène artistique vibrante et son ambiance cosmopolite. Les paysages naturels du Québec, des Laurentides aux rives du Saint-Laurent, offrent des possibilités infinies pour les amateurs de plein air.
                    </p>
                    <img src="/qc.webp" alt="Québec" className={styles.provinceImage} />
                </section>
                <section className={styles.provinceSection}>
                    <h2>Colombie-Britannique</h2>
                    <p>
                        La Colombie-Britannique est connue pour ses paysages à couper le souffle, allant des montagnes imposantes aux plages immaculées. Vancouver, la plus grande ville de la province, est une métropole vibrante avec une scène culinaire et culturelle florissante. Victoria, la capitale, est réputée pour ses jardins magnifiques et son architecture historique. Les amateurs de plein air peuvent explorer les parcs nationaux, faire du ski à Whistler, ou découvrir la beauté de l'île de Vancouver.
                    </p>
                    <img src="/cb.webp" alt="Colombie-Britannique" className={styles.provinceImage} />
                </section>
                <section className={styles.provinceSection}>
                    <h2>Alberta</h2>
                    <p>
                        L'Alberta est célèbre pour ses parcs nationaux, notamment Banff et Jasper, qui offrent des paysages de montagne spectaculaires et des activités de plein air toute l'année. Calgary et Edmonton, les principales villes de la province, proposent des festivals dynamiques, des musées intéressants et une vie nocturne animée. L'Alberta est également connue pour ses vastes prairies et ses gisements de pétrole, qui jouent un rôle crucial dans l'économie canadienne.
                    </p>
                    <img src="/alberta.webp" alt="Alberta" className={styles.provinceImage} />
                </section>
                <section className={styles.provinceSection}>
                    <h2>Nouvelle-Écosse</h2>
                    <p>
                        La Nouvelle-Écosse est une province maritime offrant une riche histoire, des côtes pittoresques et une hospitalité chaleureuse. Halifax, la capitale, est une ville portuaire avec une scène musicale dynamique et des sites historiques fascinants. Les visiteurs peuvent explorer les phares emblématiques, déguster des fruits de mer frais et découvrir les traditions acadiennes et celtiques.
                    </p>
                    <img src="/nv.webp" alt="Nouvelle-Écosse" className={styles.provinceImage} />
                </section>
            </div>
        </>
    );
}

+-