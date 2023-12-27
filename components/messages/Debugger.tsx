'use client';
import { useSocket } from '../SocketProvider';
import Message from './Message';
import { useSocketMessages } from './useSocketMessages';

const Debugger = () => {
  const socket = useSocket();
  const debuggers = useSocketMessages(socket);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {debuggers.map((debug, i) => (
        <Message key={i} debug={debug} />
      ))}
    </div>
  );
};

export default Debugger;
