import { useEffect, useState } from "react";
import { loadBlogs } from "../utils/loadBlogs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    loadBlogs().then(setBlogs);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">📚 My Blog</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.slug}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link to={`/blog/${blog.slug}`}>
              <div className="p-5 shadow-lg rounded-2xl bg-white hover:shadow-2xl transition transform hover:-translate-y-1">
                <img src={blog.image} alt={blog.title} className="rounded-lg mb-4 h-40 w-full object-cover" />
                <h2 className="text-2xl font-semibold">{blog.title}</h2>
                <p className="text-gray-500">{new Date(blog.date).toDateString()}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
