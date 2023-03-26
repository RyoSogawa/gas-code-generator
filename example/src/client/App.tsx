import { useState } from 'react'
import { Book } from '@/models/__generated__/domain/entity/book.entity';
import reactLogo from './assets/react.svg'
import './App.css'
import {serverFunctions} from './lib/gas-client';

function App() {
  const [bookId, setBookId] = useState('');
  const [book, setBook] = useState<Book | null>(null);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => serverFunctions.getSheetData().then(d => console.log(d))}>
          getSheetData
        </button>
      </div>
      <div className="card">
        <input value={bookId} onChange={(e) => setBookId(e.target.value)}  />
        <button onClick={() => serverFunctions.findBook(bookId).then(d => setBook(d))}>
          findBook
        </button>
        <pre>{JSON.stringify(book)}</pre>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
