'use client';
import { useEffect, useRef, useState } from 'react';
import { useSocket } from '../SocketProvider';
import { createDarkColor } from '@/lib/color';
import SwitchButton from '../helpers/switch/SwitchButton';
const playerColor = createDarkColor();

interface CurrentProps {
  track: string; //only the name
  from: string;
}

interface TrackProps {
  name: string;
}

const Player = () => {
  const [playerState, setPlayerState] = useState<string>();
  const [current, setCurrent] = useState<CurrentProps>();
  const [next, setNext] = useState<TrackProps[]>([]);
  const socket = useSocket();
  const unmounted = useRef(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (unmounted.current) return;
    socket.on('PlayerState', (state: string) => {
      setPlayerState(state);
    });
    socket.on('Player.current', (current: CurrentProps) => {
      setCurrent(current);
    });
    socket.on('Player.next', (tracks) => {
      setNext(tracks);
    });

    return () => {
      unmounted.current = true;
    };
  }, [socket]);

  const expand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mt-3 bg-bbaby-brighter rounded-md text-center">
      <div className="relative">
        <p className="font-bold py-3">
          {playerState ? `PLAYER STATE: ${playerState.toUpperCase()} - FROM: ${current?.from.toUpperCase() || 'NO FROM'}` : 'NO PLAYER'}
        </p>
        <div className="absolute top-0 bottom-0 right-0 flex items-center justify-center">
          <SwitchButton content="Expand" checked={expanded} callback={expand} extraClass="" />
        </div>
      </div>
      <div className="border border-bbaby-border rounded-b-md" style={{ backgroundColor: playerColor }}>
        <div className="px-4 py-2">
          <div className="flex justify-between items-center text-sm font-semibold">
            <div className="flex-1"></div>
            <div className="flex-1">{current?.track || 'NO CURRENT TRACK'}</div>
            <div className="flex-1">
              {next.map((track, i) => {
                if (!expanded && i > 0) return;
                return (
                  <div className="w-[1/3]" key={i}>
                    <span className="text-ellipsis whitespace-nowrap">{track.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
