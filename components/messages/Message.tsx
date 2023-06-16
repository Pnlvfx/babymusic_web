import { DebuggerProps } from "./useSocketMessages";
import ScrollToBottom from "react-scroll-to-bottom";

const Message = ({ debug }: { debug: DebuggerProps }) => {
  return (
    <div className="mt-4 mx-1 rounded-md border border-bbaby-border bg-bbaby-brighter">
      <p className="font-bold text-center py-3">
        {debug.category.toUpperCase()}
      </p>
      <div className="rounded-b-md" style={{ backgroundColor: debug.color }}>
        <ScrollToBottom className="h-[200px] lg:h-[400px] overflow-y-scroll">
          <div className="px-4 py-2">
            {debug.messages.map((_, i) => (
              <p className="font-semibold whitespace-pre text-center" key={i}>
                {_}
              </p>
            ))}
          </div>
        </ScrollToBottom>
      </div>
    </div>
  );
};

export default Message;
