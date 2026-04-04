import { useState, useEffect } from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Education from './components/Education';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 7 || hour >= 21) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const isDark = theme === 'dark';

  return (
    <div className={isDark ? 'min-h-screen bg-gray-900 text-gray-100' : 'min-h-screen bg-purple-50 text-gray-800'}>
      <Header />
      <main className="max-w-4xl mx-auto px-5 py-10 grid grid-cols-2 gap-6">
        <div className="col-span-1 row-span-2">
          <Skills isDark={isDark} />
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <Education isDark={isDark} />
          <Contacts isDark={isDark} />
        </div>
      </main>
      <div className="max-w-4xl mx-auto px-5 pb-10">
        <Reviews isDark={isDark} />
      </div>
      <Footer />
      <ContactForm />

      {/* Кнопка перемикання */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 text-white text-2xl shadow-lg z-50 border-none cursor-pointer"
      >
        {isDark ? '☀️' : '🌙'}
      </button>
    </div>
  );
}

export default App;