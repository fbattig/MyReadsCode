import React from 'react';
import BookShelf from './BookShelf';


const Home = ({books}) => {

  const shelves = [
    {
      name: 'Currently Reading',
      slug: 'currentlyReading',
    },
    {
      name: 'Want To Read',
      slug: 'wantToRead',
    },
    {
      name: 'Read',
      slug: 'read'
    },
  ];

     return(
       <div className='list-books'>
       <div className='list-books-title'>
         <h1>My reads</h1>
       </div>
       <div className='list-books-content'>

          {shelves.map((bookShelf)=> (
            <BookShelf
             key = {bookShelf.slug}
             bookShelfTitle ={ bookShelf.name} 
             books={books.filter((book)=> {
               return book.shelf === bookShelf.slug;
             })}
             
             />
          ))}
          </div>
       </div>
     )
 
}

export default Home;