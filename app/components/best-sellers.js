'use client'

import { useState, useEffect } from "react";
import axios from 'axios';
import Image from 'next/image';

export default function BestSellers(){
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get('https://api.nytimes.com/svc/books/v3/lists/current/childrens-middle-grade-hardcover.json?api-key=5Nvm1ZuvqBMrh1eW9NyVVksbcSlxGdnl')
      .then(response => {
        setBooks(response.data.results.books);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="row row-cols-1 row-cols-md-4 gy-3">
          {books.map((book, index) => (
            <div key={index} className="col-sm">
              <div className="card h-100">
                <Image
                  priority
                  src={book.book_image}
                  height={book.book_image_height}
                  width={book.book_image_width}
                  alt=""
                  className='card-img-top'
                />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.author}</p>
                </div>
              </div>
            </div>  
          ))}
      </div>
    </>
  );
};