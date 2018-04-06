import React from 'react';
import Book from './Book';

const  BookShelf =( {bookShelfTitle, books} )=> (
  
    <div className='bookshelf'>
      <h2 className='bookshelf-title'> {bookShelfTitle}</h2>
      <div className='bookshelf-books'>
          <ol className='books-grid>'>
          {
            books.length >0 && books.map( book => {
              return (
                <li key = { book.id }>
                   <Book 
                      shelf={ book.shelf }
                      bookId={ book.id }
                      bookCoverImage= { book.imageLinks.thumbnail }
                      bookTitle= { book.title }
                      bookAuthors= { book.authors }
                      { ...book }
                   />
                </li>
              );
            })
          }
          </ol>
    </div>
  </div>

)

export default BookShelf;