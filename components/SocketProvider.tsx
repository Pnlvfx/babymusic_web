"use client";
import { socketInitializer } from "@/lib/socket";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Socket } from "socket.io-client";
import LoadingPage from "./LoadingPage";

interface SocketProviderProps {
  socket: Socket;
}

const SocketProvider = createContext<SocketProviderProps | undefined>(
  undefined
);

export const SocketContextProvider = ({ children }: PropsWithChildren) => {
  const [socket, setSocket] = useState<Socket>();
  const unmounted = useRef(false);

  useEffect(() => {
    if (unmounted.current) return;
    setSocket(socketInitializer());
    console.log("socket connected");
    return () => {
      unmounted.current = true;
    };
  }, []);

  if (!socket) return <LoadingPage />;
  
  return (
    <SocketProvider.Provider
      value={{
        socket,
      }}
    >
      {children}
    </SocketProvider.Provider>
  );
};

export const useSocket = () => {
  const context = useContext(SocketProvider);
  if (!context) {
    throw new Error("Session must be used with SessionProvider");
  }
  return context.socket;
};
