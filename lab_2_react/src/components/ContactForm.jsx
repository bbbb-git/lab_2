import { useEffect, useState } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-2xl p-10 max-w-lg w-11/12 relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-5 text-2xl text-purple-600 bg-transparent border-none cursor-pointer"
        >✕</button>
        <h2 className="text-2xl font-bold text-violet-500 mb-6">Зворотній зв'язок</h2>
        <form action="https://formspree.io/f/xnjogekw" method="POST" className="flex flex-col gap-3">
          <input name="name" type="text" placeholder="Ім'я" required
            className="w-full p-3 border-2 border-purple-200 rounded-xl text-gray-800 placeholder-gray-400" />
          <input name="email" type="email" placeholder="Email" required
            className="w-full p-3 border-2 border-purple-200 rounded-xl text-gray-800 placeholder-gray-400" />
          <input name="phone" type="tel" placeholder="Номер телефону"
            className="w-full p-3 border-2 border-purple-200 rounded-xl text-gray-800 placeholder-gray-400" />
          <textarea name="message" placeholder="Ваше повідомлення" rows="4"
            className="w-full p-3 border-2 border-purple-200 rounded-xl resize-none text-gray-800 placeholder-gray-400" />
          <button type="submit"
            className="w-full p-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl text-base cursor-pointer">
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;