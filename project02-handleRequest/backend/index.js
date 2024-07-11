import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/' , (req , res) => {
    res.send('this is server!')
})

app.get('/api/places' , (req , res) => {

    const places = [
        { id: 1, name: 'Santorini', content: 'Santorini is famous for its stunning sunsets, white-washed buildings, and crystal-clear waters.' },
        { id: 2, name: 'Banff National Park', content: 'Banff National Park in Canada is known for its breathtaking landscapes, turquoise lakes, and majestic mountains.' },
        { id: 3, name: 'Great Barrier Reef', content: 'The Great Barrier Reef in Australia is the world\'s largest coral reef system, teeming with marine life and vibrant coral reefs.' },
        { id: 4, name: 'Kyoto', content: 'Kyoto in Japan is renowned for its ancient temples, traditional tea houses, and picturesque gardens.' },
        { id: 5, name: 'Machu Picchu', content: 'Machu Picchu in Peru is an ancient Incan city perched high in the Andes Mountains, offering stunning panoramic views.' }
    ];

    res.send(places);
});

app.listen(port , () => {
    console.log('working correctly.');
});