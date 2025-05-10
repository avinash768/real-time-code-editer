const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const rooms = {};

io.on('connection', (socket) => {
  socket.on('join', (roomId) => {
    socket.join(roomId);
    socket.roomId = roomId;

    if (rooms[roomId]) {
      socket.emit('loadCode', rooms[roomId]);
    } else {
      rooms[roomId] = '';
    }
  });

  socket.on('updateCode', ({ roomId, code }) => {
    rooms[roomId] = code;
    socket.to(roomId).emit('updateCode', code);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
