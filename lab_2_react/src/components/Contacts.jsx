function Contacts({ isDark }) {
  const bg = isDark ? 'bg-gray-800 text-gray-100' : 'bg-white';

  return (
    <section id="contacts" className={`${bg} rounded-2xl p-8 shadow-md`}>
      <h2 className="text-xl font-bold text-violet-500 border-b-2 border-purple-100 pb-2 mb-4">Контакти</h2>
      <ul className="space-y-2 text-sm">
        <li>Email: <a href="mailto:glinskayara@gmail.com" className="text-violet-500 hover:opacity-80">glinskayara@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/yaryna-hlynska-aaba312bb" target="_blank" className="text-violet-500 hover:opacity-80">yaryna-hlynska</a></li>
      </ul>
    </section>
  );
}

export default Contacts;