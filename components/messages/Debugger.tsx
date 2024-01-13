'use client';
import ScrollToBottom from 'react-scroll-to-bottom';
import { useSocket } from '../SocketProvider';
import Message from './Message';

const Debugger = () => {
  const { messages } = useSocket();
  return (
    <ScrollToBottom className="h-[400px] mt-4 rounded-lg border border-bbaby-border bg-bbaby-brighter mx-1">
      {messages.map((message) => (
        <Message key={message.msg} message={message} />
      ))}
    </ScrollToBottom>
  );
};

export default Debugger;
