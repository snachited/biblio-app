import Image from 'next/image';
import styles from './Accueil.module.css';
import Citation from './Citation';
import Gallerie from '@/components/Galerie.jsx';
import gallerieDrapeau from '@/public/gallerie-drapeau.json';
import { useTheme } from './ThemeProvider';


export default function Accueil() {
    const [theme] = useTheme();

    return (
        <>
            <div className={styles.welcomeContainer}>
                <h1 className={styles.brand}>
                    Bienvenue sur <span className={styles.brandHighlight}>CanadaTours</span>
                </h1>
                <p className={styles.tagline}>
                    Votre guide ultime pour découvrir les merveilles touristiques et culturelles des provinces canadiennes.
                </p>
            </div>
            <Citation auteur='CANADATOURS.CA'>
                Que vous soyez un voyageur local ou international,
                notre mission est de vous fournir une plateforme informative et engageante qui met en valeur la richesse et la diversité des attractions canadiennes. 
                Chez CanadaTours, nous croyons que chaque coin du Canada a quelque chose d&apos;unique à offrir.
            </Citation>
            <Gallerie images={gallerieDrapeau} />
            <div className={styles.imageContainer}>
                <Image src="/canada.webp" alt="Canada Landscape" className={styles.image} width={800} height={600} />
            </div>
            <div className={styles.content}>
                <ProvinceSection
                    title="Ontario"
                    description="Ontario est la province la plus peuplée du Canada, abritant des villes dynamiques comme Toronto, la capitale économique du pays, et Ottawa, la capitale nationale. L&apos;Ontario est réputé pour ses attractions culturelles, telles que le Musée royal de l&apos;Ontario et la Galerie d&apos;art de l&apos;Ontario, ainsi que pour ses merveilles naturelles comme les chutes du Niagara, l&apos;un des sites les plus emblématiques au monde. Avec ses parcs provinciaux étendus, ses lacs pittoresques et ses régions viticoles renommées, l&apos;Ontario offre une diversité d&apos;expériences à ses visiteurs."
                    imageSrc="/on.webp"
                    imageAlt="Ontario"
                />
                <ProvinceSection
                    title="Québec"
                    description="Québec est la plus grande province du Canada en termes de superficie et est la seule à avoir une majorité de francophones. Connue pour son riche patrimoine culturel et historique, le Québec attire des millions de visiteurs chaque année avec ses festivals animés, sa cuisine délicieuse et son architecture européenne. La ville de Québec, avec ses rues pavées et ses fortifications historiques, est un site du patrimoine mondial de l&apos;UNESCO, tandis que Montréal, la plus grande ville de la province, est célèbre pour sa scène artistique vibrante et son ambiance cosmopolite. Les paysages naturels du Québec, des Laurentides aux rives du Saint-Laurent, offrent des possibilités infinies pour les amateurs de plein air."
                    imageSrc="/qc.webp"
                    imageAlt="Québec"
                />
                <ProvinceSection
                    title="Colombie-Britannique"
                    description="La Colombie-Britannique est connue pour ses paysages à couper le souffle, allant des montagnes imposantes aux plages immaculées. Vancouver, la plus grande ville de la province, est une métropole vibrante avec une scène culinaire et culturelle florissante. Victoria, la capitale, est réputée pour ses jardins magnifiques et son architecture historique. Les amateurs de plein air peuvent explorer les parcs nationaux, faire du ski à Whistler, ou découvrir la beauté de l&apos;île de Vancouver."
                    imageSrc="/cb.webp"
                    imageAlt="Colombie-Britannique"
                />
                <ProvinceSection
                    title="Alberta"
                    description="L&apos;Alberta est célèbre pour ses parcs nationaux, notamment Banff et Jasper, qui offrent des paysages de montagne spectaculaires et des activités de plein air toute l&apos;année. Calgary et Edmonton, les principales villes de la province, proposent des festivals dynamiques, des musées intéressants et une vie nocturne animée. L&apos;Alberta est également connue pour ses vastes prairies et ses gisements de pétrole, qui jouent un rôle crucial dans l&apos;économie canadienne."
                    imageSrc="/alberta.webp"
                    imageAlt="Alberta"
                />
                <ProvinceSection
                    title="Nouvelle-Écosse"
                    description="La Nouvelle-Écosse est une province maritime offrant une riche histoire, des côtes pittoresques et une hospitalité chaleureuse. Halifax, la capitale, est une ville portuaire avec une scène musicale dynamique et des sites historiques fascinants. Les visiteurs peuvent explorer les phares emblématiques, déguster des fruits de mer frais et découvrir les traditions acadiennes et celtiques."
                    imageSrc="/nv.webp"
                    imageAlt="Nouvelle-Écosse"
                />
            </div>
        </>
    );
}

const ProvinceSection = ({ title, description, imageSrc, imageAlt }) => (
    <section className={styles.provinceSection}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Image src={imageSrc} alt={imageAlt} className={styles.provinceImage} width={800} height={600} />
    </section>
);
