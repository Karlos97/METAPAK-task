import axios from 'axios';
import { bookListUrl, booksPerFetch } from '../../config/config';

const getUsersList = (genre = 'fiction', startIndex = 0) => {
  const bookstListLink = `https://api.github.com/users`;

  return axios.get(bookstListLink).then((res) => {
    console.log(res);
    // res.data?.items.map((book) => ({
    //   title: book.volumeInfo.title,
    //   subtitle: book.volumeInfo.subtitle,
    //   authors: book.volumeInfo.authors,
    //   publishedDate: book.volumeInfo.publishedDate,
    //   description: book.volumeInfo.description,
    //   smallThumbnail: book.volumeInfo.imageLinks.smallThumbnail,
    //   id: book.id,
    // })),
  });
};

export default getUsersList;
