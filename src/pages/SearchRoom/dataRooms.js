import photo455n1 from '../../assets/img/rooms/room455/1-cover.jpg';
import photo455n2 from '../../assets/img/rooms/room455/2-cover.jpg';
import photo455n3 from '../../assets/img/rooms/room455/3-cover.jpg';
import photo455n4 from '../../assets/img/rooms/room455/4-cover.jpg';

import photo666n1 from '../../assets/img/rooms/room666/1-cover.jpg';
import photo666n2 from '../../assets/img/rooms/room666/2-cover.jpg';
import photo666n3 from '../../assets/img/rooms/room666/3-cover.jpg';
import photo666n4 from '../../assets/img/rooms/room666/4-cover.jpg';

import photo854n1 from '../../assets/img/rooms/room854/1-cover.jpg';
import photo854n2 from '../../assets/img/rooms/room854/2-cover.jpg';
import photo854n3 from '../../assets/img/rooms/room854/3-cover.jpg';
import photo854n4 from '../../assets/img/rooms/room854/4-cover.jpg';
import photo854n5 from '../../assets/img/rooms/room854/5-cover.jpg';

import noPhoto from '../../assets/img/rooms/no-photo.jpg';

const dataRooms = [
  {
    roomNumber: 455,
    content: {
      photoGallery: [
        {id: 1, image: photo455n1, title: 'big room'},
        {id: 2, image: photo455n2, title: 'new room'},
        {id: 3, image: photo455n3, title: 'old room'},
        {id: 4, image: photo455n4, title: 'beautiful room'},
      ],
      isLuxury: true,
      price: '9 900',
      rating: 5,
      feedback: 145,
    },
  },
  {
    roomNumber: 666,
    content: {
      photoGallery: [
        {id: 1, image: photo666n1, title: 'big room'},
        {id: 2, image: photo666n2, title: 'new room'},
        {id: 3, image: photo666n3, title: 'old room'},
        {id: 4, image: photo666n4, title: 'beautiful room'},
      ],
      isLuxury: false,
      price: '8 500',
      rating: 4.5,
      feedback: 65,
    },
  },
  {
    roomNumber: 854,
    content: {
      photoGallery: [
        {id: 1, image: photo854n1, title: 'big room'},
        {id: 2, image: photo854n2, title: 'new room'},
        {id: 3, image: photo854n3, title: 'old room'},
        {id: 4, image: photo854n4, title: 'beautiful room'},
        {id: 5, image: photo854n5, title: 'green room'},
      ],
      isLuxury: true,
      price: '8 600',
      rating: 3,
      feedback: 35,
    },
  },
  {
    roomNumber: 856,
    content: {
      photoGallery: [
        {id: 1, image: photo854n2, title: 'new room'},
        {id: 2, image: photo854n3, title: 'old room'},
        {id: 3, image: photo854n4, title: 'beautiful room'},
      ],
      isLuxury: false,
      price: '7 200',
      rating: 5,
      feedback: 19,
    },
  },
  {
    roomNumber: 740,
    content: {
      photoGallery: [
        {id: 1, image: photo854n4, title: 'new room'},
        {id: 2, image: photo854n3, title: 'old room'},
        {id: 3, image: photo854n2, title: 'beautiful room'},
      ],
      isLuxury: false,
      price: '6 200',
      rating: 4,
      feedback: 44,
    },
  },
  {
    roomNumber: 982,
    content: {
      photoGallery: [
        {id: 1, image: photo455n2, title: 'new room'},
        {id: 2, image: photo854n3, title: 'old room'},
        {id: 3, image: photo854n2, title: 'beautiful room'},
      ],
      isLuxury: false,
      price: '5 800',
      rating: 3,
      feedback: 56,
    },
  },
  {
    roomNumber: 100,
    content: {
      photoGallery: [
        {id: 1, image: photo455n1, title: 'big room'},
        {id: 2, image: photo455n2, title: 'new room'},
        {id: 3, image: photo455n3, title: 'old room'},
        {id: 4, image: photo455n4, title: 'beautiful room'},
      ],
      isLuxury: true,
      price: '9 900',
      rating: 5,
      feedback: 145,
    },
  },
  {
    roomNumber: 123,
    content: {
      photoGallery: [
        {id: 1, image: photo666n1, title: 'big room'},
        {id: 2, image: photo666n2, title: 'new room'},
        {id: 3, image: photo666n3, title: 'old room'},
        {id: 4, image: photo666n4, title: 'beautiful room'},
      ],
      isLuxury: false,
      price: '8 500',
      rating: 4.5,
      feedback: 65,
    },
  },
  {
    roomNumber: 222,
    content: {
      photoGallery: [
        {id: 1, image: photo854n1, title: 'big room'},
        {id: 2, image: photo854n2, title: 'new room'},
        {id: 3, image: photo854n3, title: 'old room'},
        {id: 4, image: photo854n4, title: 'beautiful room'},
        {id: 5, image: photo854n5, title: 'green room'},
      ],
      isLuxury: true,
      price: '8 600',
      rating: 3,
      feedback: 35,
    },
  },
  {
    roomNumber: 777,
    content: {
      photoGallery: [
        {id: 1, image: photo666n2, title: 'new room'},
        {id: 2, image: photo854n3, title: 'old room'},
        {id: 3, image: photo854n4, title: 'beautiful room'},
      ],
      isLuxury: false,
      price: '7 777',
      rating: 5,
      feedback: 77,
    },
  },
  {
    roomNumber: 444,
    content: {
      photoGallery: [
        {id: 1, image: photo854n5, title: 'new room'},
        {id: 2, image: photo854n3, title: 'old room'},
        {id: 3, image: photo854n2, title: 'beautiful room'},
      ],
      isLuxury: true,
      price: '11 200',
      rating: 5,
      feedback: 744,
    },
  },
  {
    roomNumber: 352,
    content: {
      photoGallery: [
        {id: 1, image: noPhoto, title: 'new room'},
      ],
      isLuxury: false,
      price: '2 500',
      rating: 2,
      feedback: 55,
    },
  },
];

export default dataRooms;