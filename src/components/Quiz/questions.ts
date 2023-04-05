export type QuizQuestion = {
    id: number;
    text: string;
    answers: {
        id: number;
        text: string;
        value: string;
    }[];
};

export const questions: QuizQuestion[] = [
    {
        id: 1,
        text: 'Do you prefer the mountains or the beach?',
        answers: [
            { id: 1, text: 'Mountains', value: 'mountains' },
            { id: 2, text: 'Beach', value: 'beach' },
        ],
    },
    {
        id: 2,
        text: 'Would you rather relax or be active on your trip?',
        answers: [
            { id: 1, text: 'Relax', value: 'relax' },
            { id: 2, text: 'Be active', value: 'active' },
        ],
    },
    {
        id: 3,
        text: 'What kind of climate do you prefer?',
        answers: [
            { id: 1, text: 'Hot and sunny', value: 'hot' },
            { id: 2, text: 'Cool and crisp', value: 'cool' },
            { id: 3, text: 'Mild and temperate', value: 'mild' },
        ],
    },
    {
        id: 4,
        text: 'How important is cultural exploration to you?',
        answers: [
            { id: 1, text: 'Very important', value: 'high_culture' },
            { id: 2, text: 'Somewhat important', value: 'medium_culture' },
            { id: 3, text: 'Not important', value: 'low_culture' },
        ],
    },
    {
        id: 5,
        text: 'Do you prefer urban or rural settings?',
        answers: [
            { id: 1, text: 'Urban', value: 'urban' },
            { id: 2, text: 'Rural', value: 'rural' },
        ],
    },
    {
        id: 6,
        text: 'What type of activities do you enjoy?',
        answers: [
            { id: 1, text: 'Outdoor adventures', value: 'outdoor' },
            { id: 2, text: 'Cultural experiences', value: 'cultural' },
            { id: 3, text: 'Shopping and dining', value: 'shopping_dining' },
            { id: 4, text: 'Relaxing by the pool or beach', value: 'relaxing' },
        ],
    },
    {
        id: 7,
        text: 'What type of accommodation do you prefer?',
        answers: [
            { id: 1, text: 'Luxury hotel or resort', value: 'luxury' },
            { id: 2, text: 'Mid-range hotel or vacation rental', value: 'midrange' },
            { id: 3, text: 'Budget-friendly hostel or guesthouse', value: 'budget' },
        ],
    },
    // Add more questions here
];
