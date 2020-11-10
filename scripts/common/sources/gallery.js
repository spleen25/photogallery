import axios from 'axios';

const getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users');

const getAlbumsAll = () =>
  axios.get('https://jsonplaceholder.typicode.com/albums');

const getPhotosAll = () =>
  axios.get('https://jsonplaceholder.typicode.com/photos');

const getAlbums = query =>
  axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${query}`);

const getPhotos = query =>
  axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${query}`);

export { getUsers, getAlbums, getPhotos, getAlbumsAll, getPhotosAll };
