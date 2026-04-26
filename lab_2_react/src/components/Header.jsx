function Header() {
  return (
    <header className="bg-gradient-to-r from-violet-500 to-purple-600 text-white py-12 px-6 text-center rounded-b-3xl shadow-lg">
      <h1 className="text-4xl font-bold mb-4">Глинська Ярина</h1>
      <nav className="flex justify-center gap-6 mt-4">
        <a href="#skills" className="text-white opacity-80 hover:opacity-100 border-b-2 border-transparent hover:border-white transition-all">Навички</a>
        <a href="#education" className="text-white opacity-80 hover:opacity-100 border-b-2 border-transparent hover:border-white transition-all">Освіта</a>
        <a href="#contacts" className="text-white opacity-80 hover:opacity-100 border-b-2 border-transparent hover:border-white transition-all">Контакти</a>
        <a href="#reviews" className="text-white opacity-80 hover:opacity-100 border-b-2 border-transparent hover:border-white transition-all">Відгуки</a>
      </nav>

    </header>
  );
}

export default Header;
