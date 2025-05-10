import { FaPlay } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-blue-600 text-white text-xs">
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-1 hover:bg-blue-700 px-2 py-1 rounded">
          <FaPlay size={10} />
          <span>Run</span>
        </button>
        <span>Live Share</span>
        <span>JavaScript</span>
      </div>
      <div className="flex items-center space-x-4">
        <span>Ln 1, Col 1</span>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <span>LF</span>
      </div>
    </div>
  );
};

export default Footer;
