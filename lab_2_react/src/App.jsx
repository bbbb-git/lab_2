import Header from './components/Header';
import Skills from './components/Skills';
import Education from './components/Education';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-purple-50">
      <Header />
      <main className="max-w-4xl mx-auto px-5 py-10 grid grid-cols-2 gap-6">
        <div className="col-span-1 row-span-2">
          <Skills />
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          <Education />
          <Contacts />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;