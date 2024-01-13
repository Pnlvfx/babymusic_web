'use client';
import { useSocket } from './SocketProvider';

const TotalUsers = () => {
  const { connectedUsers } = useSocket();

  return (
    <button className="flex items-center justify-center bg-[#741685] rounded-lg py-2 px-4">
      <span className="mr-1">Total Users:</span>
      <span className="font-bold">{connectedUsers.length}</span>
    </button>
  );
};

export default TotalUsers;
