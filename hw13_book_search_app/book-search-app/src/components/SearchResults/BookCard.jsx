import React from 'react'

export default function BookCard({book, onAdd}) {
    const {imageLinks, title, authors} = book.volumeInfo
  return (
    <div onClick={()=> onAdd(book)}>
      <img src={imageLinks?.thumbnail} alt={title} />
      <h4>{title}</h4>
      <p>Author:{authors}</p>
    </div>
  )
}
