import { BASE_URL } from '@/config/config';

const getWssUrl = () => {
  if (BASE_URL.startsWith('https://')) {
    return BASE_URL.replace('https://', 'wss://');
  } else if (BASE_URL.startsWith('http://')) {
    return BASE_URL.replace('http://', 'ws://');
  } else throw new Error('Invalid url');
};

export const socketInitializer = () => {
  return new WebSocket(getWssUrl() + '?' + new URLSearchParams({ isDebugger: 'true' }).toString());
};

export const getCommand = (text: string) => {
  const command = text.split('\r\n').at(0)?.split(' ').at(0);
  if (!command) {
    throw new Error('You should handle invalid command by closing socket connection!');
  }
  return command;
};

export const getJSON = (msg: string) => {
  const jsonString = msg.split('\r\n').at(0)?.split(' ');
  jsonString?.shift();
  if (!jsonString) throw new Error('Invalid JSON in socket');
  return JSON.parse(jsonString.join(' '));
};
