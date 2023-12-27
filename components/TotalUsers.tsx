'use client';

import { useEffect, useRef, useState } from 'react';
import { useSocket } from './SocketProvider';

const TotalUsers = () => {
  const [connectedUsers, setConnectedUsers] = useState([]);
  const socket = useSocket();
  const shouldRun = useRef(true);

  useEffect(() => {
    if (!shouldRun.current) return;
    shouldRun.current = false;
    console.log('Add ConnectedUsers listener');
    socket.on('ConnectedUsers', (_) => {
      setConnectedUsers(_);
    });
  }, [socket]);
  return (
    <button className="flex items-center justify-center bg-[#741685] rounded-lg py-2 px-4">
      <span className="mr-1">Total Users:</span>
      <span className="font-bold">{connectedUsers.length}</span>
    </button>
  );
};

export default TotalUsers;
