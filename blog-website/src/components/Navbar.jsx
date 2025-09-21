import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">My Blog</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/developers" className="hover:text-gray-200">Developers</Link>
        </div>
      </div>
    </nav>
  );
}
