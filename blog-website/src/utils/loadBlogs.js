import matter from "gray-matter";

export async function loadBlogs() {
  const posts = import.meta.glob("/src/blogs/*.md", { eager: true, as: "raw" });

  return Object.entries(posts).map(([path, raw]) => {
    const { data, content } = matter(raw);
    return {
      slug: path.split("/").pop().replace(".md", ""),
      ...data,
      content,
    };
  }).sort((a, b) => new Date(b.date) - new Date(a.date));
}

