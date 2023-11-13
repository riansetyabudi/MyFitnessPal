import React, { useState } from 'react';
import { ScrollView, Image } from 'react-native';
export const images = [
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.siloamhospitals.com%2Finformasi-siloam%2Fartikel%2Fmakanan-tinggi-kalori&psig=AOvVaw0sDklpZaSFedU0pTmEB1rf&ust=1698462616504000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCODR17mglYIDFQAAAAAdAAAAABAE',
];
const food = {
    image: {
        borderRadius : 15,
        width: 10,
        height: 20,
        margin: 10,
    },
};
const ImageFood = ({ images }) => {
    return (
        <ScrollView horizontal style={{ marginTop: 20 }}>
            {images.map((image, index) => (
                <Image key={index} source={{uri:image}} style={food.image} />
            ))}
        </ScrollView>
    );
};
const [text, setText] = useState('');
export default ImageFood;
