// ... mêmes définitions de types

export default async function getOptimizedContent(pathArray: string[]): Promise<[any, null] | [null, any]> {
    const filePath = `./${pathArray.join('/')}/`;

    try {
        // 1. On lance toutes les importations en parallèle
        const promiseSeo = import(`${filePath}seo.ts`);
        const promiseCards = import(`${filePath}cards.ts`);
        const promiseServices = import(`${filePath}services.ts`);
        const promiseHero = import(`${filePath}hero.ts`);

        // 2. On attend que TOUTES les promesses soient résolues
        const [
            { seo },
            { cards },
            { services },
            { hero }
        ] = await Promise.all([promiseSeo, promiseCards, promiseServices, promiseHero]);
        
        // 3. On assemble le résultat
        const success = { cards, services, hero, seo };
        return [success, null];

    } catch (error) {
        console.error(`Failed to load module at ${filePath}:`, error);
        return [null, error];
    }
}
