import React from 'react'

export default function Wishlist({wishlist}) {
  return (
    <div>
      <h2>Wishlist</h2>
      <ul>
        {wishlist.map((book)=>(
            <div key={book.id}>
                 <span>{book.volumeInfo.title}</span>
             
            </div> 
        ))}
      </ul>
    </div>

    
  )
}
