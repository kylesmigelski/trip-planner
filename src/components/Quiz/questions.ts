export type QuizQuestion = {
    id: number;
    text: string;
    answers: {
        id: number;
        text: string;
        image?: string;
        value: string;
    }[];
};

export const questions: QuizQuestion[] = [
    {
        id: 1,
        text: 'Do you prefer the mountains or the beach?',
        answers: [
            { id: 1, text: 'Mountains', value: 'mountains', image: 'https://pbs.twimg.com/media/FPuFTZHaUAEC_Kv.png'},
            { id: 2, text: 'Beach', value: 'beach', image: 'https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg'},
            { id: 3, text: 'Urban', value: 'urban', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/800px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg'}
        ],
    },
    {
        id: 2,
        text: 'Would you rather relax or be active on your trip?',
        answers: [
            { id: 1, text: 'Relax', value: 'relax', image: 'https://www.tropicalhangout.shop/wp-content/uploads/2020/06/Tropical-Hangout-0919-42-scaled.jpg'},
            { id: 2, text: 'Be active', value: 'active', image: 'https://wildlandtrekking.com/content/uploads/2020/12/northcascades-1200x901.jpg' },
            { id: 3, text: 'Learn something new', value: 'learn', image: 'https://imageio.forbes.com/specials-images/imageserve/1071462356/0x0.jpg?format=jpg&width=1200'}
        ],
    },
    {
        id: 3,
        text: 'What kind of climate do you prefer?',
        answers: [
            { id: 1, text: 'Hot and sunny', value: 'hot', image:'https://townsquare.media/site/385/files/2019/06/RS27185_ThinkstockPhotos-947964728.jpg?w=980&q=75' },
            { id: 2, text: 'Cool and crisp', value: 'cool', image:'https://media.istockphoto.com/id/483785638/photo/fallen-leaf-covered-in-winter-frost.jpg?s=612x612&w=0&k=20&c=R3pt4LWAA3puB4pafpob8kGWo8VmXQ3mtUGCMGvNVjU=' },
            { id: 3, text: 'Mild and temperate', value: 'mild', image: 'https://cdn.britannica.com/05/155405-050-F8969EE6/Spring-flowers-fruit-trees-bloom.jpg' },
        ],
    },
    {
        id: 4,
        text: 'How important is cultural exploration to you?',
        answers: [
            { id: 1, text: 'Very important', value: 'high_culture', image: 'https://eadn-wc02-2195941.nxedge.io/wp-content/uploads/2019/12/grpm-8853-scaled.jpg'},
            { id: 2, text: 'Somewhat important', value: 'medium_culture', image: 'https://images.squarespace-cdn.com/content/v1/607954dfdc8ad650fd2ef6a3/1653555340068-ILC7NU40OAGRILYBCG3D/unsplash-image-KwVla2Ex2TY.jpg' },
            { id: 3, text: 'Not important', value: 'low_culture', image:'https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/POLL/ofvlxldggeegzae6606jiq.jpg' },
        ],
    },
    {
        id: 5,
        text: 'What type of activities do you enjoy?',
        answers: [
            { id: 1, text: 'Outdoor adventures', value: 'outdoor', image:'https://www.miamiandbeaches.com/getmedia/460de76a-147f-492e-abdc-926d4a8e0c61/Oleta_State_River_Park_Ecoadventure_1-06-21.jpg' },
            { id: 2, text: 'Cultural experiences', value: 'cultural', image:'https://i.insider.com/5beddc3848eb120a0a2dbf62?width=750&format=jpeg&auto=webp'},
            { id: 3, text: 'Shopping and dining', value: 'shopping_dining', image:'https://imageio.forbes.com/specials-images/imageserve/638a98b6a088e5ce47202972/0x0.jpg?format=jpg&width=1200' },
            { id: 4, text: 'Relaxing by the pool or beach', value: 'relaxing', image:'https://villarentalsmexico.com/wp-content/uploads/2019/05/Relaxing-Mexican-Vacation.jpeg' },
        ],
    },
    {
        id: 6,
        text: 'What type of accommodation do you prefer?',
        answers: [
            { id: 1, text: 'Luxury hotel or resort', value: 'luxury', image: 'https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg'},
            { id: 2, text: 'Mid-range hotel or vacation rental', value: 'midrange', image: 'https://twomonkeystravelgroup.com/wp-content/uploads/2015/08/Ultimate-List-of-Best-Mid-range-Hotels-in-Paris-3-855x570.jpg' },
            { id: 3, text: 'Budget-friendly hostel or guesthouse', value: 'budget', image:'https://nomadsworld.com/wp-content/uploads/2018/11/nomads-brisbane-hostel-dorm.jpg' },
        ],
    },
    // Add more questions here
];
