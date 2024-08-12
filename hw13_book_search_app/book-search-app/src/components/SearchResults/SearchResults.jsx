import React from 'react'
import BookCard from './BookCard'

export default function SearchResults({books, onAdd}) {
    console.log("Books to display:", books);
  return (
    <div>
      <ul>
        {books?.map((book)=>(
            <li><BookCard book={book} onAdd={onAdd} key={book.id}></BookCard></li>
            // <li>test</li>
        ))}
        
      </ul>
    </div>
//     <ul>
//       {books?.map((book) => (
//         <li key={book.id}>
//           <BookCard book={book} onAdd={onAdd} />
//         </li>
//       ))}
//     </ul>
  )
}
