import './globals.css';
import type { ReactNode } from 'react';
import { SocketProvider } from '@/components/SocketProvider';

export const metadata = {
  title: 'Debug Baby Music',
  description: 'Debug listener for Baby Music. The best music app on the planet.',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <SocketProvider>{children}</SocketProvider>
      </body>
    </html>
  );
};

export default RootLayout;
