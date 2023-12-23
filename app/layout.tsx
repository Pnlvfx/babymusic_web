import type { ReactNode } from "react";
import "./globals.css";
import { SocketContextProvider } from "@/components/SocketProvider";

export const metadata = {
  title: "Debug Baby Music",
  description:
    "Debug listener for Baby Music. The best music app on the planet.",
};

const RootLayout = ({ children }: {children: ReactNode}) => {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <SocketContextProvider>
          <div className="pt-12">
          {children}
          </div>
        </SocketContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
