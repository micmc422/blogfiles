export default async function getContent(pathArray: string[]) {
    const filePath = `./${pathArray.join('/')}/`;
    // Construire le chemin complet du fichier

    try {
        const { seo }: { seo: Metadata } = await import(`${filePath}seo.ts`);
        const { cards }: { cards: card[] } = await import(`${filePath}cards.ts`);
        const { services }: { services: ServicesItem } = await import(`${filePath}services.ts`);
        const { hero }: { hero: heroType } = await import(`${filePath}hero.ts`);
        const success = { cards, services, hero, seo }
        return [success, null];

    } catch (error) {
        console.error(`Failed to load module at ${filePath}:`, error);
        return [null, error];
    }
}
