import React, { useState } from 'react';
import '../styles/communityForum.css';

const CommunityForumPage = () => {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ name: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    const newPost = {
      id: Date.now(),
      name: form.name,
      message: form.message,
      time: new Date().toLocaleString(),
    };
    setPosts([newPost, ...posts]);
    setForm({ name: '', message: '' });
  };

  return (
    <div className="forum-container">
      <h1>Community Forum</h1>
      <form className="forum-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <textarea
          placeholder="Write your message..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button type="submit">Post</button>
      </form>

      <div className="forum-posts">
        {posts.length === 0 && <p>No posts yet. Be the first to start the discussion!</p>}
        {posts.map((post) => (
          <div key={post.id} className="forum-post">
            <div className="post-header">
              <strong>{post.name}</strong> <span>{post.time}</span>
            </div>
            <p>{post.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityForumPage;
