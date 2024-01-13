'use client';
import { getCommand, getJSON, socketInitializer } from '@/lib/socket';
import { ReactNode, createContext, useContext, useEffect, useRef, useState } from 'react';
import { MessageProps } from './messages/types/message';

interface SocketProviderProps {
  isConnected: boolean;
  connectedUsers: unknown[]; // get the IUSer from the server
  messages: MessageProps[];
}

const Context = createContext<SocketProviderProps | undefined>(undefined);

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const shouldRun = useRef(true);
  const [isConnected, setIsConnected] = useState(false);
  const [connectedUsers, setConnectedUsers] = useState([]);
  const [messages, setMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    if (!shouldRun.current) return;
    shouldRun.current = false;
    const socket = socketInitializer();
    socket.addEventListener('error', (err) => {
      setIsConnected(false);
      console.log(err);
    });
    socket.addEventListener('close', (err) => {
      setIsConnected(false);
      console.log(err);
    });
    socket.addEventListener('message', (ev) => {
      const command = getCommand(ev.data);
      switch (command) {
        case 'CONNECTED-USERS': {
          const users = getJSON(ev.data);
          console.log({ users });
          setConnectedUsers(users);
          break;
        }
        case 'MESSAGE': {
          const msg = getJSON(ev.data);
          setMessages((prev) => [...prev, msg]);
          break;
        }
        case 'PING': {
          socket.send('PONG\r\n');
        }
        default: {
          console.log(ev.data);
        }
      }
    });
    socket.addEventListener('open', () => setIsConnected(true));
  }, []);

  return <Context.Provider value={{ isConnected, connectedUsers, messages }}>{children}</Context.Provider>;
};

export const useSocket = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('Session must be used with SessionProvider');
  }
  return context;
};
