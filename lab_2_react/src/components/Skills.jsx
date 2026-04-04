function Skills({ isDark }) {
  const bg = isDark ? 'bg-gray-800 text-gray-100' : 'bg-white';

  return (
    <section id="skills" className={`${bg} rounded-2xl p-8 shadow-md`}>
      <h2 className="text-xl font-bold text-violet-500 border-b-2 border-purple-100 pb-2 mb-4">Навички</h2>

      <h3 className="text-purple-400 font-bold mt-4 mb-2">Технічні навички</h3>
      <ul className="list-disc pl-5 text-sm space-y-1">
        <li>Мови програмування: C, C#, Python</li>
        <li>Операційні системи: Linux, Windows</li>
        <li>Бази даних: SQL</li>
        <li>Комп'ютерні мережі</li>
      </ul>

      <h3 className="text-purple-400 font-bold mt-4 mb-2">Особисті якості</h3>
      <ul className="list-disc pl-5 text-sm space-y-1">
        <li>Швидке навчання</li>
        <li>Відповідальність</li>
        <li>Робота в команді</li>
      </ul>

      <h3 className="text-purple-400 font-bold mt-4 mb-2">Мови</h3>
      <ul className="list-disc pl-5 text-sm space-y-1">
        <li>Українська — рідна</li>
        <li>Англійська — B2</li>
      </ul>
    </section>
  );
}

export default Skills;