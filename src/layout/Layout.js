import React from "react";
import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
