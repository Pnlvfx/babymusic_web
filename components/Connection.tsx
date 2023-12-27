'use client';
import { useEffect, useState } from 'react';
import { useSocket } from './SocketProvider';
import { ImConnection } from 'react-icons/im';
import { MdSignalWifiConnectedNoInternet4 } from 'react-icons/md';

const Connection = () => {
  const socket = useSocket();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    console.log('Effect run');
    const interval = setInterval(() => {
      if (socket.connected) {
        setIsConnected(socket.connected);
        clearInterval(interval);
        return;
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [socket]);

  return (
    <div className="rounded-lg py-2 px-4 bg-[#1a1a1b]">
      {isConnected ? <ImConnection className="text-green-600 w-6 h-6" /> : <MdSignalWifiConnectedNoInternet4 className="text-red-400 w-6 h-6" />}
    </div>
  );
};

export default Connection;
