"use client";
import { useSocket } from "./SocketProvider";
import {ImConnection} from 'react-icons/im'
import {MdSignalWifiConnectedNoInternet4} from 'react-icons/md'

const Connection = () => {
  const socket = useSocket();

  return (
    <div className="rounded-lg py-2 px-4 bg-[#1a1a1b]">
      {socket.connected ? (
        <ImConnection className="text-green-600 w-6 h-6" />
      ) : (
        <MdSignalWifiConnectedNoInternet4 className="text-red-400 w-6 h-6" />
      )}
    </div>
  );
};

export default Connection;
