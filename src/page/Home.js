import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const navigate = useNavigate();

  const createSession = () => {
    const id = uuidv4();
    navigate(`/editor/${id}`);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <button
        onClick={createSession}
        className="bg-blue-600 px-6 py-3 rounded hover:bg-blue-700"
      >
        Create CodeTogether Link
      </button>
    </div>
  );
};

export default Home;
