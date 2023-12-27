import { createDarkColor } from '@/lib/color';
import { useEffect, useRef, useState } from 'react';
import { Socket } from 'socket.io-client';
import { MessageProps } from './types/message';

let shouldInitialize = true;

export interface DebuggerProps {
  category: string;
  messages: string[];
  color: string;
}

export const useSocketMessages = (socket: Socket) => {
  const [debuggers, setDebuggers] = useState<DebuggerProps[]>([]);
  const shouldRun = useRef(true);
  useEffect(() => {
    if (!shouldInitialize) return;
    if (!shouldRun.current) return;
    shouldRun.current = false;
    shouldInitialize = false;
    console.log('Add Message listener');
    socket.on('Message', (msg: MessageProps) => {
      console.log({ msg });
      setDebuggers((prev) => {
        const existing = prev.find((d) => d.category === msg.category);
        if (existing) {
          const index = prev.findIndex((ii) => ii.category === existing.category);
          const newArr = [...prev];
          newArr[index] = { ...existing, messages: [...existing.messages, msg.msg] };
          return newArr;
        } else {
          return [{ category: msg.category, messages: [msg.msg], color: createDarkColor() }, ...prev]; //FOR NOW
        }
      });
    });
  }, [socket]);

  return debuggers;
};
