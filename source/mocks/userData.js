/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
export default {
  user: [
    {
      id: 1,
      name: 'Mỹ Khánh',
      age: 22,
      info: 'University of Economics',
      distance: 1,
      image: require('../assets/images/image1.jpg'),
    },
    {
      id: '2',
      name: 'M Khánh',
      age: 22,
      info: 'University of Economics',
      distance: 2,
      image: require('../assets/images/image2.jpg'),
    },
    {
      id: '3',
      name: 'Maria',
      age: 23,
      info: 'University of Science',
      distance: 3,
      image: require('../assets/images/image3.jpg'),
    },
  ],
};
