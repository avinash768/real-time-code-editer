import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import Header from '../compnentes/Header';
import Footer from '../compnentes/Footer';

const socket = io('http://localhost:4000');

const Editor = () => {
  const { roomId } = useParams();
  const [code, setCode] = useState('');

  useEffect(() => {
    socket.emit('join', roomId);

    socket.on('loadCode', (savedCode) => setCode(savedCode));
    socket.on('updateCode', (newCode) => setCode(newCode));

    return () => {
      socket.disconnect();
    };
  }, [roomId]);

  const handleChange = (value) => {
    setCode(value);
    socket.emit('updateCode', { roomId, code: value });
  };

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-grow bg-gray-900 text-white p-4 overflow-auto">
        <h2 className="mb-2">Room ID: {roomId}</h2>
        <CodeMirror
          value={code}
          height="80vh"
          theme={vscodeDark}
          extensions={[javascript()]}
          onChange={handleChange}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Editor;
