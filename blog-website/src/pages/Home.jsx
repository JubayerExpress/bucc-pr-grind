import { useEffect, useState } from "react";
import { loadBlogs } from "../utils/loadBlogs";
import { Link } from "react-router-dom";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    loadBlogs().then(setBlogs);
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">📚 My Blog</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {blogs.map(blog => (
          <Link key={blog.slug} to={`/blog/${blog.slug}`}>
            <div className="p-4 shadow-lg rounded-xl bg-white hover:shadow-xl transition">
              <img src={blog.image} alt={blog.title} className="rounded-lg mb-4" />
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="text-gray-500">{new Date(blog.date).toDateString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

