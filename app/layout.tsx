import { PropsWithChildren } from "react";
import "./globals.css";
import { SocketContextProvider } from "@/components/SocketProvider";

export const metadata = {
  title: "Debug Baby Music",
  description:
    "Debug listener for Baby Music. The best music app on the planet.",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <SocketContextProvider>{children}</SocketContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
