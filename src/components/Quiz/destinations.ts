// src/destinations.ts

export type SubLocation = {
    id: number;
    name: string;
    tags: string[];
};

export type Destination = {
    id: number;
    name: string;
    subLocations: SubLocation[];
};

export const destinations: Destination[] = [
    {
        id: 1,
        name: 'Hawaii',
        subLocations: [
            { id: 1, name: 'Beach', tags: ['beach', 'relax', 'hot', 'low_culture', 'rural', 'shopping_dining', 'luxury'] },
            { id: 2, name: 'Hiking', tags: ['mountains', 'active', 'mild', 'low_culture', 'rural', 'outdoor', 'luxury'] },
        ],
    },
    {
        id: 2,
        name: 'Colorado',
        subLocations: [
            { id: 3, name: 'Hiking and Camping', tags: ['mountains', 'active', 'cool', 'low_culture', 'rural', 'outdoor', 'budget'] },
            { id: 4, name: 'Skiing', tags: ['mountains', 'active', 'cool', 'low_culture', 'rural', 'outdoor', 'midrange'] },
        ],
    },
    {
        id: 3,
        name: 'New York City',
        subLocations: [
            { id: 5, name: 'Museum', tags: ['urban', 'relax', 'mild', 'high_culture', 'shopping_dining', 'midrange'] },
            { id: 6, name: 'Shopping', tags: ['urban', 'relax', 'mild', 'low_culture', 'shopping_dining', 'luxury'] },
        ],
    },
    {
        id: 4,
        name: 'Florida',
        subLocations: [
            { id: 7, name: 'Beach', tags: ['beach', 'relax', 'hot', 'low_culture', 'rural', 'shopping_dining', 'midrange'] },
            { id: 8, name: 'Theme Park', tags: ['beach', 'relax', 'hot', 'low_culture', 'rural', 'shopping_dining', 'luxury'] },
        ],
    },
    {
        id: 5,
        name: 'California',
        subLocations: [
            { id: 9, name: 'Malibu', tags: ['beach', 'relax', 'hot', 'low_culture', 'rural', 'shopping_dining', 'luxury'] },
            { id: 10, name: 'Yosemite', tags: ['mountains', 'active', 'cool', 'low_culture', 'rural', 'outdoor', 'budget'] },
        ],
    },
    {
        id: 6,
        name: 'Michigan',
        subLocations: [
            { id: 11, name: 'Wine Tasting', tags: ['urban', 'relax', 'mild', 'low_culture', 'rural', 'shopping_dining', 'midrange'] },
            { id: 12, name: 'Fishing', tags: ['beach', 'relax', 'mild', 'low_culture', 'rural', 'outdoor', 'budget'] },
        ],
    },
    {
        id: 7,
        name: 'Canada',
        subLocations: [
            { id: 13, name: 'Niagara Falls', tags: ['beach', 'relax', 'mild', 'low_culture', 'rural', 'outdoor', 'budget'] },
            { id: 14, name: 'Banff', tags: ['mountains', 'active', 'cool', 'low_culture', 'rural', 'outdoor', 'luxury'] },
        ],
    },
];


export const calculateTripRecommendation = (
    preferences: string[],
): SubLocation[] => {
    const scores: { [key: number]: number } = {};

    preferences.forEach((preference) => {
        destinations.forEach((destination) => {
            destination.subLocations.forEach((subLocation) => {
                if (subLocation.tags.includes(preference)) {
                    if (scores[subLocation.id]) {
                        scores[subLocation.id]++;
                    } else {
                        scores[subLocation.id] = 1;
                    }
                }
            });
        });
    });

    const highestScore = Math.max(...Object.values(scores));
    const bestSubLocationIds = Object.keys(scores).filter(
        (key) => scores[parseInt(key)] === highestScore
    );

    return bestSubLocationIds.map((id) => {
        return destinations
            .flatMap((destination) => destination.subLocations)
            .find((subLocation) => subLocation.id === parseInt(id))!;
    });
};

