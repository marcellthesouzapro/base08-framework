import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '../public/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [djangoMessage, setDjangoMessage] = useState('');
  const [djangoUser, setDjangoUser] = useState('');

  useEffect(() => {
    if (window.djangoData) {
      setDjangoMessage(window.djangoData.message);
      setDjangoUser(window.djangoData.user);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div class="bg-white p-8 rounded-xl shadow-lg text-center max-w-md w-full">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-6">
          Painel Administrativo
        </h1>

        <div class="flex justify-center items-center space-x-6 mb-8">
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} class="logo vite w-24 h-24 transition-transform duration-300 hover:scale-110" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} class="logo react w-24 h-24 transition-transform duration-300 hover:scale-110" alt="React logo" />
          </a>
        </div>

        <p class="text-lg text-gray-700 mb-4">
          Mensagem do Django: <span class="font-semibold text-blue-600">{djangoMessage}</span>
        </p>
        <p class="text-lg text-gray-700 mb-6">
          Usuário Logado: <span class="font-semibold text-green-600">{djangoUser}</span>
        </p>

        <div class="card mb-8">
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            onClick={() => setCount((count) => count + 1)}
          >
            Contador é {count}
          </button>
          <p class="text-sm text-gray-500 mt-4">
            Clique no botão para incrementar o contador.
          </p>
        </div>

        <p class="read-the-docs text-gray-600 text-sm">
          Clique nos logos Vite e React para aprender mais.
        </p>
      </div>
    </div>
  );
}

export default App;