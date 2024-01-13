import { destructureColor } from '@/lib/color';
import type { MessageProps } from './types/message';

const Message = ({ message }: { message: MessageProps }) => {
  return (
    <div style={{ color: destructureColor(message.color) }} className="p-2 flex items-center">
      <div className="w-[200px]">
        <p className="font-bold">
          {message.category.toUpperCase()}:{'  '}
        </p>
      </div>
      <p className="font-semibold whitespace-pre text-sm text-ellipsis">{message.msg}</p>
    </div>
  );
};

export default Message;
