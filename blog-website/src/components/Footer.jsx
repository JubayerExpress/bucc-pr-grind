export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        <p>© {new Date().getFullYear()} My Blog. Built with ❤️ using React & Tailwind.</p>
      </div>
    </footer>
  );
}
