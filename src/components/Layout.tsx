import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppFloating from "./WhatsAppFloating";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 pt-[82px]">{children}</main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
};

export default Layout;
