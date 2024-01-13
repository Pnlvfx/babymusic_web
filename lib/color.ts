import type { MessageProps } from '@/components/messages/types/message';

const colorHexMap: Record<MessageProps['color'], string> = {
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
  yellow: '#FFFF00',
  purple: '#800080',
  brown: '#A52A2A',
};

export const destructureColor = (color: MessageProps['color']) => {
  return colorHexMap[color];
};

export const createDarkColor = () => {
  let color = '#';
  for (let i = 0; i < 3; i++) color += ('0' + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString()).slice(-2);
  return color;
};
