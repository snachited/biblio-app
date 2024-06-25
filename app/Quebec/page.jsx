import Quebec from '@/components/Quebec';
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
        <Quebec />
    </>;
}