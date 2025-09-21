import { motion } from "framer-motion";

const devs = [
  {
    name: "Jubayer Zaman",
    role: "Full Stack Developer",
    image: "/images/dev1.jpg",
    github: "https://github.com/yourusername",
  },
  {
    name: "Shakira",
    role: "UI/UX Designer",
    image: "/images/dev2.jpg",
    github: "https://github.com/teammate",
  },
  {
    name: "Sara",
    role: "Backend Engineer",
    image: "/images/dev3.jpg",
    github: "https://github.com/teammate",
  }
];

export default function Developers() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">👨‍💻 Developers</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {devs.map((dev, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            className="p-6 bg-white shadow-xl rounded-2xl text-center hover:shadow-2xl transition"
          >
            <img src={dev.image} alt={dev.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            <h2 className="text-xl font-bold">{dev.name}</h2>
            <p className="text-gray-500">{dev.role}</p>
            <a href={dev.github} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline mt-2 block">
              GitHub Profile
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
