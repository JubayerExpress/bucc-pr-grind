import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadBlogs } from "../utils/loadBlogs";
import ReactMarkdown from "react-markdown";

export default function Blog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    loadBlogs().then(blogs => {
      setBlog(blogs.find(b => b.slug === slug));
    });
  }, [slug]);

  if (!blog) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img src={blog.image} alt={blog.title} className="rounded-lg mb-6" />
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="text-gray-500">{new Date(blog.date).toDateString()}</p>
      <div className="prose max-w-none mt-6">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>
    </div>
  );
}

