'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

export default function BestSellers(){
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get('https://api.nytimes.com/svc/books/v3/lists/current/childrens-middle-grade-hardcover.json?api-key=5Nvm1ZuvqBMrh1eW9NyVVksbcSlxGdnl')
      .then(response => {
        setBooks(response.data.results.books);
      })
      .catch(error => {
        setBooks('error');
      });
  }, []);
  return (
    <>
      <div className='row row-cols-1 row-cols-md-4 gy-3'>
        {books == 'error' ? (
          <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Error:</strong> An error happened while fetching data. Please wait a few seconds and try again.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        ) : (
          books.map((book, index) => (
          <div key={index} className='col-sm'>
            <div className='card h-100'>
              <h5 className='card-header'>Rank: {book.rank}</h5>
              <Image
                priority
                src={book.book_image}
                height={book.book_image_height}
                width={book.book_image_width}
                alt=''
                className='card-img-top'
              />
              <div className='card-body'>
                <h5 className='card-title text-capitalize'>{book.title.toString().toLowerCase()}</h5>
                <p className='card-text'>{book.author}</p>
                <Link href={book.amazon_product_url} className='card-link'>Buy At Amazon</Link>
              </div>
            </div>
          </div>  
        )))}
      </div>
    </>
  );
};