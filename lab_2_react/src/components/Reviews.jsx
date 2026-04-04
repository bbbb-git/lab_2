import { useEffect, useState } from 'react';

function Reviews({ isDark }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/5/comments')
      .then(res => res.json())
      .then(data => setComments(data));
  }, []);

  const bg = isDark ? 'bg-gray-800 text-gray-100' : 'bg-white';
  const cardBg = isDark ? 'bg-gray-700 text-gray-100' : 'bg-purple-50';

  return (
    <section className={`${bg} rounded-2xl p-6 shadow-md`}>
      <h2 className="text-xl font-bold text-violet-500 mb-4 pb-2 border-b-2 border-purple-50">Відгуки</h2>
      <div className="grid grid-cols-2 gap-4">
        {comments.map(comment => (
          <div key={comment.id} className={`${cardBg} p-4 rounded-xl`}>
            <p className="font-bold text-sm">{comment.name}</p>
            <p className="text-purple-400 text-xs">{comment.email}</p>
            <p className="text-sm mt-2">{comment.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;