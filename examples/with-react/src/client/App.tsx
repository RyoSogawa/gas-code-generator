import { useState } from 'react';

import reactLogo from './assets/react.svg';
import './App.css';
import { serverFunctions } from './lib/gas-client';

import type { SerializedBook } from '@/models/book.entity';

function App() {
  const [bookId, setBookId] = useState('');
  const [book, setBook] = useState<SerializedBook | null>(null);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          type="button"
          onClick={() => serverFunctions.getAllBooks().then((d) => console.warn(d))}
        >
          getAllBooks
        </button>
      </div>
      <div className="card">
        <input value={bookId} onChange={(e) => setBookId(e.target.value)} />
        <button
          type="button"
          onClick={() => serverFunctions.findBookById(bookId).then((d) => setBook(d))}
        >
          findBook
        </button>
        <pre>{JSON.stringify(book)}</pre>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
