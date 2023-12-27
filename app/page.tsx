import Connection from '@/components/Connection';
import Debugger from '@/components/messages/Debugger';
import Player from '@/components/player/Player';
import TotalUsers from '@/components/TotalUsers';

const Home = () => {
  return (
    <div className="p-4">
      <div className="flex justify-center items-center space-x-3">
        <TotalUsers />
        <Connection />
      </div>
      <Player />
      <Debugger />
    </div>
  );
};

export default Home;
