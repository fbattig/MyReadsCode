import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Book = ({ bookId, shelf, bookCoverImage, bookTitle, bookAuthors, handleStatusUpdate }) => (

  <div className= 'book' >
     <div className='book-top'>
      <div className='book-cover' style={ { width: 128, height: 193, backgroundImage: `url("${ bookCoverImage }")` } } />
      <div className='book-shelf-changer'>
          <select defaultValue={ shelf } 
          onChange={ (e)=> { 
            handleStatusUpdate({ id:bookId }, 
            e.target.value); } }>
            <option value='none' disabled>Move to... </option>
            <option value='currentlyReading' >Currently Reading </option>
            <option value='wantToRead'>Want To Read </option>
            <option value='read'>Read</option>
            <option value='none'>None </option>
          </select>
      </div>
    </div>
    <div className='book-title' > { bookTitle } </div>
    <div className='book-authors'>{bookAuthors.map((author)=> <span key={ author } > {author} <br /></span>)}</div>
    <div className='book-authors'> <Link className='more' to = {`/details/${bookId}` }> More... </Link></div> 
 </div>

);
Book.propTypes = {
  bookId: PropTypes.string.isRequired,
  shelf: PropTypes.string,
  bookCoverImage: PropTypes.string,
  bookTitle: PropTypes.string,
  bookAuthors: PropTypes.array,
  handleStatusUpdate: PropTypes.func.isRequired,
};

Book.defaultProps = {
  shelf: 'none',
  bookCoverImage: '',
  bookTitle: 'Title',
  bookAuthors: ['No Authors'],
};

export default Book;