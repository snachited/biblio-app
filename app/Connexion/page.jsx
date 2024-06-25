import Connexion from '@/components/Connexion';
export const metadata = {
    title: 'CanadaTours | Accueil',
    description: 'Site web touristique de Canada.',
    openGraph: {
      title: 'CanadaTours | Accueil',
      description: 'Site web touristique de Canada.',
      images: ['./logo1.webp']
    }
}
export default function Page() {
    return <>
        <Connexion />
    </>;
}