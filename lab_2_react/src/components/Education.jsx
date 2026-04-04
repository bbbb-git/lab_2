function Education({ isDark }) {
  const bg = isDark ? 'bg-gray-800 text-gray-100' : 'bg-white';

  return (
    <section id="education" className={`${bg} rounded-2xl p-8 shadow-md`}>
      <h2 className="text-xl font-bold text-violet-500 border-b-2 border-purple-100 pb-2 mb-4">Освіта</h2>
      <p className="text-sm leading-relaxed">
        <span className="font-bold">Національний університет «Львівська Політехніка»</span><br />
        Спеціальність: Кібербезпека та захист інформації<br />
        3 курс | 2023 — дотепер
      </p>
    </section>
  );
}

export default Education;