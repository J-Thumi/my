import { useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {

  const [books, setBooks] = useState([])
axios.get('http://localhost:3000/book')
.then((data)=>{
console.log(data.data[0].author)
setBooks(data.data)
})
.catch(err => console(err))
  return (
    <>
    <table>
      <tr>
        <th>Title</th>
        <th>Author</th>
      </tr>
      {books.map(book =>(
        <tr key={book.id}>
          <td>{book.title}</td>
          <td>{book.author}</td>
        </tr>
      ))}
    </table>
   
    </>
  )
}

export default App
