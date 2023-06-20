import { PropsWithChildren } from "react";
import "./globals.css";
import { SocketContextProvider } from "@/components/SocketProvider";
import Header from "@/components/header/Header";

export const metadata = {
  title: "Debug Baby Music",
  description:
    "Debug listener for Baby Music. The best music app on the planet.",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <SocketContextProvider>
          <Header />
          <div className="pt-12">
          {children}
          </div>
        </SocketContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
