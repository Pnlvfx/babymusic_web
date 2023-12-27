import { BASE_URL } from '@/config/config';
import { io } from 'socket.io-client';

export const socketInitializer = () => {
  const socket = io(BASE_URL, {
    withCredentials: true,
    query: {
      isDebugger: true,
    },
  });
  socket.connect();
  return socket;
};
