import { FaWindowMinimize, FaWindowMaximize, FaTimes } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white text-sm select-none">
      <div className="flex items-center space-x-4">
        <span className="text-blue-400 font-bold">CodeTogether</span>
        <div className="hidden md:flex space-x-4">
          <span className="hover:bg-gray-700 px-2 py-1 rounded">File</span>
          <span className="hover:bg-gray-700 px-2 py-1 rounded">Edit</span>
          <span className="hover:bg-gray-700 px-2 py-1 rounded">View</span>
          <span className="hover:bg-gray-700 px-2 py-1 rounded">Go</span>
        </div>
      </div>
      <div className="flex space-x-3">
        <button className="hover:bg-gray-700 p-1 rounded">
          <FaWindowMinimize size={12} />
        </button>
        <button className="hover:bg-gray-700 p-1 rounded">
          <FaWindowMaximize size={12} />
        </button>
        <button className="hover:bg-red-600 p-1 rounded">
          <FaTimes size={12} />
        </button>
      </div>
    </div>
  );
};

export default Header;
